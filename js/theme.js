const THEME_KEY = 'mm-theme';

function getThemePref() {
    return localStorage.getItem(THEME_KEY) || 'system';
}

function setThemePref(pref) {
    localStorage.setItem(THEME_KEY, pref);
    applyTheme();
}

function applyTheme() {
    const pref = getThemePref();
    const root = document.documentElement;

    root.removeAttribute('data-theme');

    if (pref === 'dark') {
        root.setAttribute('data-theme', 'dark');
    } else if (pref === 'light') {
        root.setAttribute('data-theme', 'light');
    } else {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            root.setAttribute('data-theme', 'light');
        } else {
            root.setAttribute('data-theme', 'dark');
        }
    }

    updateThemeToggle();
}

function updateThemeToggle() {
    const container = document.getElementById('theme-toggle');
    if (!container) return;

    const pref = getThemePref();

    container.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === pref);
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    if (getThemePref() === 'system') applyTheme();
});

// Apply on load
applyTheme();
