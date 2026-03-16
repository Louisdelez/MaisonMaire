let activeCategory = 'all';
let searchQuery = '';

function refreshApp() {
    const services = loadServices();
    const categories = getCategories();
    const filtered = filterServices(services);
    renderGrid(filtered, document.body.classList.contains('admin-mode'));
    renderCategories(categories, activeCategory);
}

function filterServices(services) {
    return services.filter(s => {
        const matchCat = activeCategory === 'all' || (s.category || '').toLowerCase() === activeCategory;
        const matchSearch = !searchQuery
            || s.name.toLowerCase().includes(searchQuery)
            || (s.description || '').toLowerCase().includes(searchQuery)
            || (s.url || '').toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });
}

function filterByCategory(cat) {
    activeCategory = cat;
    refreshApp();
}

document.addEventListener('DOMContentLoaded', () => {
    // Search
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        refreshApp();
    });

    // Close modal on overlay click
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Escape to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Initial render
    refreshApp();
});
