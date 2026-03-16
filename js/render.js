function renderGrid(services, isAdmin) {
    const grid = document.getElementById('grid');
    const empty = document.getElementById('empty');

    // Clear cards
    grid.querySelectorAll('.card').forEach(c => c.remove());

    if (services.length === 0) {
        empty.classList.add('visible');
        return;
    }

    empty.classList.remove('visible');

    services
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .forEach(s => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = s.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.dataset.id = s.id;
            card.dataset.name = s.name.toLowerCase();
            card.dataset.desc = (s.description || '').toLowerCase();
            card.dataset.cat = (s.category || '').toLowerCase();

            card.innerHTML = `
                <div class="card-actions">
                    <button class="btn-edit" title="Modifier" onclick="event.preventDefault();event.stopPropagation();openEditForm('${s.id}')">
                        <i data-lucide="pen" style="width:14px;height:14px"></i>
                    </button>
                    <button class="btn-delete" title="Supprimer" onclick="event.preventDefault();event.stopPropagation();confirmDelete('${s.id}','${s.name.replace(/'/g, "\\'")}')">
                        <i data-lucide="trash-2" style="width:14px;height:14px"></i>
                    </button>
                </div>
                <div class="card-header">
                    <div class="card-icon" style="background:${s.color}18;color:${s.color}">
                        <i data-lucide="${s.icon}"></i>
                    </div>
                    <span class="card-title">${s.name}</span>
                </div>
                <div class="card-desc">${s.description}</div>
                <div class="card-url">${s.url}</div>
            `;

            grid.appendChild(card);
        });

    lucide.createIcons();
}

function renderCategories(categories, active) {
    const container = document.getElementById('categories');
    container.innerHTML = '';

    const allPill = document.createElement('button');
    allPill.className = 'cat-pill' + (active === 'all' ? ' active' : '');
    allPill.textContent = t('hub.category_all');
    allPill.onclick = () => filterByCategory('all');
    container.appendChild(allPill);

    categories.forEach(cat => {
        const pill = document.createElement('button');
        pill.className = 'cat-pill' + (active === cat.toLowerCase() ? ' active' : '');
        pill.textContent = cat;
        pill.onclick = () => filterByCategory(cat.toLowerCase());
        container.appendChild(pill);
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

function openModal(html) {
    const overlay = document.getElementById('modal-overlay');
    document.getElementById('modal-content').innerHTML = html;
    overlay.classList.add('open');
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
}
