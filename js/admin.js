let selectedIcon = 'globe';

function toggleAdmin() {
    document.body.classList.toggle('admin-mode');
    refreshApp();
}

function openAddForm() {
    selectedIcon = 'globe';
    openModal(buildServiceForm(null));
    setupIconPicker();
}

function openEditForm(id) {
    const services = loadServices();
    const service = services.find(s => s.id === id);
    if (!service) return;
    selectedIcon = service.icon || 'globe';
    openModal(buildServiceForm(service));
    setupIconPicker();
}

function buildServiceForm(service) {
    const isEdit = !!service;
    const categories = getCategories();

    return `
        <h2>${isEdit ? t('admin.edit_service') : t('admin.new_service_title')}</h2>
        <form id="service-form" onsubmit="handleServiceSubmit(event, ${isEdit ? `'${service.id}'` : 'null'})">
            <div class="form-group">
                <label>${t('admin.form_name')}</label>
                <input type="text" name="name" value="${isEdit ? service.name : ''}" required placeholder="${t('admin.placeholder_name')}">
            </div>
            <div class="form-group">
                <label>${t('admin.form_description')}</label>
                <textarea name="description" placeholder="${t('admin.placeholder_description')}">${isEdit ? service.description : ''}</textarea>
            </div>
            <div class="form-group">
                <label>${t('admin.form_url')}</label>
                <input type="url" name="url" value="${isEdit ? service.url : ''}" required placeholder="https://...">
            </div>
            <div class="form-group">
                <label>${t('admin.form_category')}</label>
                <input type="text" name="category" value="${isEdit ? service.category : ''}" placeholder="${t('admin.placeholder_category')}" list="cat-list">
                <datalist id="cat-list">
                    ${categories.map(c => `<option value="${c}">`).join('')}
                </datalist>
            </div>
            <div class="form-group">
                <label>${t('admin.form_icon')}</label>
                <button type="button" class="icon-picker-btn" onclick="toggleIconPicker()">
                    <span class="preview-icon"><i data-lucide="${selectedIcon}"></i></span>
                    <span id="icon-name-display">${selectedIcon}</span>
                </button>
                <div class="icon-grid-container" id="icon-picker">
                    <input type="text" class="icon-grid-search" placeholder="${t('admin.placeholder_search')}" oninput="filterIcons(this.value)">
                    <div class="icon-grid" id="icon-grid"></div>
                </div>
                <input type="hidden" name="icon" id="icon-input" value="${selectedIcon}">
            </div>
            <div class="form-group">
                <label>${t('admin.form_color')}</label>
                <div class="color-row">
                    <input type="color" name="colorPicker" value="${isEdit ? service.color : '#5c5cff'}" oninput="this.form.color.value=this.value">
                    <input type="text" name="color" value="${isEdit ? service.color : '#5c5cff'}" pattern="^#[0-9a-fA-F]{6}$" placeholder="#5c5cff" oninput="this.form.colorPicker.value=this.value">
                </div>
            </div>
            <div class="form-actions">
                <button type="button" class="btn btn-secondary" onclick="closeModal()">${t('admin.cancel')}</button>
                <button type="submit" class="btn btn-primary">${isEdit ? t('admin.save') : t('admin.add')}</button>
            </div>
        </form>
    `;
}

function setupIconPicker() {
    const grid = document.getElementById('icon-grid');
    if (!grid) return;
    grid.innerHTML = '';

    ICON_LIST.forEach(name => {
        const btn = document.createElement('div');
        btn.className = 'icon-option' + (name === selectedIcon ? ' selected' : '');
        btn.title = name;
        btn.innerHTML = `<i data-lucide="${name}"></i>`;
        btn.onclick = () => selectIcon(name);
        grid.appendChild(btn);
    });

    lucide.createIcons();
}

function toggleIconPicker() {
    const picker = document.getElementById('icon-picker');
    picker.classList.toggle('open');
}

function filterIcons(query) {
    const q = query.toLowerCase();
    document.querySelectorAll('#icon-grid .icon-option').forEach(opt => {
        opt.style.display = opt.title.includes(q) ? '' : 'none';
    });
}

function selectIcon(name) {
    selectedIcon = name;
    document.getElementById('icon-input').value = name;
    document.getElementById('icon-name-display').textContent = name;

    // Update preview
    const preview = document.querySelector('.preview-icon');
    preview.innerHTML = `<i data-lucide="${name}"></i>`;

    // Update selection visual
    document.querySelectorAll('#icon-grid .icon-option').forEach(opt => {
        opt.classList.toggle('selected', opt.title === name);
    });

    lucide.createIcons();
    toggleIconPicker();
}

function handleServiceSubmit(e, id) {
    e.preventDefault();
    const form = e.target;
    const data = {
        name: form.name.value.trim(),
        description: form.description.value.trim(),
        url: form.url.value.trim(),
        icon: form.icon.value,
        color: form.color.value,
        category: form.category.value.trim() || 'Autre'
    };

    if (id) {
        updateService(id, data);
        showToast(t('toast.service_updated'));
    } else {
        addService(data);
        showToast(t('toast.service_added'));
    }

    closeModal();
    refreshApp();
}

function confirmDelete(id, name) {
    openModal(`
        <h2>${t('admin.delete_title')}</h2>
        <p class="confirm-text">${t('admin.delete_confirm', { name: name })}</p>
        <div class="form-actions">
            <button class="btn btn-secondary" onclick="closeModal()">${t('admin.cancel')}</button>
            <button class="btn btn-danger" onclick="doDelete('${id}')">${t('admin.delete')}</button>
        </div>
    `);
}

function doDelete(id) {
    deleteService(id);
    closeModal();
    showToast(t('toast.service_deleted'));
    refreshApp();
}

function handleExport() {
    exportServices();
    showToast(t('toast.export_done'));
}

function handleImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            await importServices(file);
            showToast(t('toast.import_done'));
            refreshApp();
        } catch {
            showToast(t('toast.import_error'));
        }
    };
    input.click();
}
