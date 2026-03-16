// ===== INTERNATIONALIZATION (i18n) =====
const I18N_KEY = 'mm-lang';
const SUPPORTED_LANGS = ['fr', 'en', 'de', 'it', 'es'];
const LANG_NAMES = { fr: 'Français', en: 'English', de: 'Deutsch', it: 'Italiano', es: 'Español' };

const translations = {
    fr: {
        // Index
        'hub.subtitle': 'Hub de services & projets',
        'hub.search_placeholder': 'Rechercher un service...',
        'hub.category_all': 'Tout',
        'hub.empty': 'Aucun service trouvé.',

        // Login
        'login.subtitle': "Connectez-vous pour accéder à l'administration",
        'login.tab_login': 'Connexion',
        'login.tab_register': 'Inscription',
        'login.username': "Nom d'utilisateur",
        'login.password': 'Mot de passe',
        'login.confirm_password': 'Confirmer le mot de passe',
        'login.submit_login': 'Se connecter',
        'login.submit_register': 'Créer un compte',
        'login.back': 'Retour au hub',
        'login.placeholder_username': 'admin',
        'login.placeholder_password': '••••••••',
        'login.placeholder_new_username': 'Choisissez un pseudo',
        'login.placeholder_new_password': 'Min. 4 caractères',

        // Login errors
        'error.fields_required': 'Champs requis',
        'error.password_too_short': 'Mot de passe trop court (min. 4)',
        'error.username_taken': "Ce nom d'utilisateur existe déjà",
        'error.invalid_credentials': 'Identifiants incorrects',
        'error.passwords_mismatch': 'Les mots de passe ne correspondent pas',

        // Admin sidebar
        'admin.label': 'Administration',
        'admin.nav_services': 'Services',
        'admin.nav_hub': 'Voir le hub',
        'admin.export': 'Exporter',
        'admin.import': 'Importer',
        'admin.logout': 'Déconnexion',

        // Admin topbar
        'admin.title': 'Gestion des services',
        'admin.new_service': 'Nouveau service',

        // Admin stats
        'admin.total_services': 'Total services',
        'admin.categories': 'Catégories',

        // Admin table
        'admin.th_service': 'Service',
        'admin.th_category': 'Catégorie',
        'admin.th_description': 'Description',
        'admin.th_actions': 'Actions',
        'admin.empty_table': 'Aucun service. Cliquez sur "Nouveau service" pour commencer.',

        // Admin modal form
        'admin.edit_service': 'Modifier le service',
        'admin.new_service_title': 'Nouveau service',
        'admin.form_name': 'Nom',
        'admin.form_description': 'Description',
        'admin.form_url': 'URL',
        'admin.form_category': 'Catégorie',
        'admin.form_color': 'Couleur',
        'admin.form_icon': 'Icône',
        'admin.cancel': 'Annuler',
        'admin.save': 'Enregistrer',
        'admin.add': 'Ajouter',

        // Admin placeholders
        'admin.placeholder_search': 'Rechercher...',
        'admin.placeholder_description': 'Courte description...',
        'admin.placeholder_category': 'Infrastructure...',
        'admin.placeholder_name': 'Mon Service',

        // Admin delete
        'admin.delete_title': 'Supprimer le service',
        'admin.delete_confirm': 'Supprimer <strong>{name}</strong> ? Cette action est irréversible.',
        'admin.delete': 'Supprimer',

        // Admin toasts
        'toast.service_updated': 'Service modifié',
        'toast.service_added': 'Service ajouté',
        'toast.service_deleted': 'Service supprimé',
        'toast.export_done': 'Export téléchargé',
        'toast.import_done': 'Import réussi',
        'toast.import_error': "Erreur lors de l'import",

        // Theme
        'theme.light': 'Clair',
        'theme.system': 'Système',
        'theme.dark': 'Sombre',
    },
    en: {
        'hub.subtitle': 'Services & Projects Hub',
        'hub.search_placeholder': 'Search a service...',
        'hub.category_all': 'All',
        'hub.empty': 'No service found.',

        'login.subtitle': 'Sign in to access administration',
        'login.tab_login': 'Sign in',
        'login.tab_register': 'Sign up',
        'login.username': 'Username',
        'login.password': 'Password',
        'login.confirm_password': 'Confirm password',
        'login.submit_login': 'Sign in',
        'login.submit_register': 'Create account',
        'login.back': 'Back to hub',
        'login.placeholder_username': 'admin',
        'login.placeholder_password': '••••••••',
        'login.placeholder_new_username': 'Choose a username',
        'login.placeholder_new_password': 'Min. 4 characters',

        'error.fields_required': 'Fields required',
        'error.password_too_short': 'Password too short (min. 4)',
        'error.username_taken': 'This username already exists',
        'error.invalid_credentials': 'Invalid credentials',
        'error.passwords_mismatch': 'Passwords do not match',

        'admin.label': 'Administration',
        'admin.nav_services': 'Services',
        'admin.nav_hub': 'View hub',
        'admin.export': 'Export',
        'admin.import': 'Import',
        'admin.logout': 'Log out',

        'admin.title': 'Service management',
        'admin.new_service': 'New service',

        'admin.total_services': 'Total services',
        'admin.categories': 'Categories',

        'admin.th_service': 'Service',
        'admin.th_category': 'Category',
        'admin.th_description': 'Description',
        'admin.th_actions': 'Actions',
        'admin.empty_table': 'No service. Click "New service" to get started.',

        'admin.edit_service': 'Edit service',
        'admin.new_service_title': 'New service',
        'admin.form_name': 'Name',
        'admin.form_description': 'Description',
        'admin.form_url': 'URL',
        'admin.form_category': 'Category',
        'admin.form_color': 'Color',
        'admin.form_icon': 'Icon',
        'admin.cancel': 'Cancel',
        'admin.save': 'Save',
        'admin.add': 'Add',

        'admin.placeholder_search': 'Search...',
        'admin.placeholder_description': 'Short description...',
        'admin.placeholder_category': 'Infrastructure...',
        'admin.placeholder_name': 'My Service',

        'admin.delete_title': 'Delete service',
        'admin.delete_confirm': 'Delete <strong>{name}</strong>? This action is irreversible.',
        'admin.delete': 'Delete',

        'toast.service_updated': 'Service updated',
        'toast.service_added': 'Service added',
        'toast.service_deleted': 'Service deleted',
        'toast.export_done': 'Export downloaded',
        'toast.import_done': 'Import successful',
        'toast.import_error': 'Error during import',

        'theme.light': 'Light',
        'theme.system': 'System',
        'theme.dark': 'Dark',
    },
    de: {
        'hub.subtitle': 'Hub für Dienste & Projekte',
        'hub.search_placeholder': 'Dienst suchen...',
        'hub.category_all': 'Alle',
        'hub.empty': 'Kein Dienst gefunden.',

        'login.subtitle': 'Melden Sie sich an, um auf die Verwaltung zuzugreifen',
        'login.tab_login': 'Anmelden',
        'login.tab_register': 'Registrieren',
        'login.username': 'Benutzername',
        'login.password': 'Passwort',
        'login.confirm_password': 'Passwort bestätigen',
        'login.submit_login': 'Anmelden',
        'login.submit_register': 'Konto erstellen',
        'login.back': 'Zurück zum Hub',
        'login.placeholder_username': 'admin',
        'login.placeholder_password': '••••••••',
        'login.placeholder_new_username': 'Benutzernamen wählen',
        'login.placeholder_new_password': 'Min. 4 Zeichen',

        'error.fields_required': 'Felder erforderlich',
        'error.password_too_short': 'Passwort zu kurz (min. 4)',
        'error.username_taken': 'Dieser Benutzername existiert bereits',
        'error.invalid_credentials': 'Ungültige Anmeldedaten',
        'error.passwords_mismatch': 'Passwörter stimmen nicht überein',

        'admin.label': 'Verwaltung',
        'admin.nav_services': 'Dienste',
        'admin.nav_hub': 'Hub anzeigen',
        'admin.export': 'Exportieren',
        'admin.import': 'Importieren',
        'admin.logout': 'Abmelden',

        'admin.title': 'Dienstverwaltung',
        'admin.new_service': 'Neuer Dienst',

        'admin.total_services': 'Dienste gesamt',
        'admin.categories': 'Kategorien',

        'admin.th_service': 'Dienst',
        'admin.th_category': 'Kategorie',
        'admin.th_description': 'Beschreibung',
        'admin.th_actions': 'Aktionen',
        'admin.empty_table': 'Kein Dienst. Klicken Sie auf "Neuer Dienst", um zu beginnen.',

        'admin.edit_service': 'Dienst bearbeiten',
        'admin.new_service_title': 'Neuer Dienst',
        'admin.form_name': 'Name',
        'admin.form_description': 'Beschreibung',
        'admin.form_url': 'URL',
        'admin.form_category': 'Kategorie',
        'admin.form_color': 'Farbe',
        'admin.form_icon': 'Symbol',
        'admin.cancel': 'Abbrechen',
        'admin.save': 'Speichern',
        'admin.add': 'Hinzufügen',

        'admin.placeholder_search': 'Suchen...',
        'admin.placeholder_description': 'Kurze Beschreibung...',
        'admin.placeholder_category': 'Infrastruktur...',
        'admin.placeholder_name': 'Mein Dienst',

        'admin.delete_title': 'Dienst löschen',
        'admin.delete_confirm': '<strong>{name}</strong> löschen? Diese Aktion ist unwiderruflich.',
        'admin.delete': 'Löschen',

        'toast.service_updated': 'Dienst aktualisiert',
        'toast.service_added': 'Dienst hinzugefügt',
        'toast.service_deleted': 'Dienst gelöscht',
        'toast.export_done': 'Export heruntergeladen',
        'toast.import_done': 'Import erfolgreich',
        'toast.import_error': 'Fehler beim Import',

        'theme.light': 'Hell',
        'theme.system': 'System',
        'theme.dark': 'Dunkel',
    },
    it: {
        'hub.subtitle': 'Hub di servizi & progetti',
        'hub.search_placeholder': 'Cerca un servizio...',
        'hub.category_all': 'Tutti',
        'hub.empty': 'Nessun servizio trovato.',

        'login.subtitle': "Accedi per gestire l'amministrazione",
        'login.tab_login': 'Accesso',
        'login.tab_register': 'Registrazione',
        'login.username': 'Nome utente',
        'login.password': 'Password',
        'login.confirm_password': 'Conferma password',
        'login.submit_login': 'Accedi',
        'login.submit_register': 'Crea account',
        'login.back': "Torna all'hub",
        'login.placeholder_username': 'admin',
        'login.placeholder_password': '••••••••',
        'login.placeholder_new_username': 'Scegli un nome utente',
        'login.placeholder_new_password': 'Min. 4 caratteri',

        'error.fields_required': 'Campi obbligatori',
        'error.password_too_short': 'Password troppo corta (min. 4)',
        'error.username_taken': 'Questo nome utente esiste già',
        'error.invalid_credentials': 'Credenziali non valide',
        'error.passwords_mismatch': 'Le password non corrispondono',

        'admin.label': 'Amministrazione',
        'admin.nav_services': 'Servizi',
        'admin.nav_hub': "Vedi l'hub",
        'admin.export': 'Esporta',
        'admin.import': 'Importa',
        'admin.logout': 'Disconnetti',

        'admin.title': 'Gestione dei servizi',
        'admin.new_service': 'Nuovo servizio',

        'admin.total_services': 'Servizi totali',
        'admin.categories': 'Categorie',

        'admin.th_service': 'Servizio',
        'admin.th_category': 'Categoria',
        'admin.th_description': 'Descrizione',
        'admin.th_actions': 'Azioni',
        'admin.empty_table': 'Nessun servizio. Clicca su "Nuovo servizio" per iniziare.',

        'admin.edit_service': 'Modifica servizio',
        'admin.new_service_title': 'Nuovo servizio',
        'admin.form_name': 'Nome',
        'admin.form_description': 'Descrizione',
        'admin.form_url': 'URL',
        'admin.form_category': 'Categoria',
        'admin.form_color': 'Colore',
        'admin.form_icon': 'Icona',
        'admin.cancel': 'Annulla',
        'admin.save': 'Salva',
        'admin.add': 'Aggiungi',

        'admin.placeholder_search': 'Cerca...',
        'admin.placeholder_description': 'Breve descrizione...',
        'admin.placeholder_category': 'Infrastruttura...',
        'admin.placeholder_name': 'Il mio servizio',

        'admin.delete_title': 'Elimina servizio',
        'admin.delete_confirm': 'Eliminare <strong>{name}</strong>? Questa azione è irreversibile.',
        'admin.delete': 'Elimina',

        'toast.service_updated': 'Servizio modificato',
        'toast.service_added': 'Servizio aggiunto',
        'toast.service_deleted': 'Servizio eliminato',
        'toast.export_done': 'Esportazione scaricata',
        'toast.import_done': 'Importazione riuscita',
        'toast.import_error': "Errore durante l'importazione",

        'theme.light': 'Chiaro',
        'theme.system': 'Sistema',
        'theme.dark': 'Scuro',
    },
    es: {
        'hub.subtitle': 'Hub de servicios y proyectos',
        'hub.search_placeholder': 'Buscar un servicio...',
        'hub.category_all': 'Todo',
        'hub.empty': 'Ningún servicio encontrado.',

        'login.subtitle': 'Inicia sesión para acceder a la administración',
        'login.tab_login': 'Iniciar sesión',
        'login.tab_register': 'Registro',
        'login.username': 'Nombre de usuario',
        'login.password': 'Contraseña',
        'login.confirm_password': 'Confirmar contraseña',
        'login.submit_login': 'Iniciar sesión',
        'login.submit_register': 'Crear cuenta',
        'login.back': 'Volver al hub',
        'login.placeholder_username': 'admin',
        'login.placeholder_password': '••••••••',
        'login.placeholder_new_username': 'Elige un nombre de usuario',
        'login.placeholder_new_password': 'Mín. 4 caracteres',

        'error.fields_required': 'Campos obligatorios',
        'error.password_too_short': 'Contraseña demasiado corta (mín. 4)',
        'error.username_taken': 'Este nombre de usuario ya existe',
        'error.invalid_credentials': 'Credenciales incorrectas',
        'error.passwords_mismatch': 'Las contraseñas no coinciden',

        'admin.label': 'Administración',
        'admin.nav_services': 'Servicios',
        'admin.nav_hub': 'Ver el hub',
        'admin.export': 'Exportar',
        'admin.import': 'Importar',
        'admin.logout': 'Cerrar sesión',

        'admin.title': 'Gestión de servicios',
        'admin.new_service': 'Nuevo servicio',

        'admin.total_services': 'Total servicios',
        'admin.categories': 'Categorías',

        'admin.th_service': 'Servicio',
        'admin.th_category': 'Categoría',
        'admin.th_description': 'Descripción',
        'admin.th_actions': 'Acciones',
        'admin.empty_table': 'Ningún servicio. Haz clic en "Nuevo servicio" para empezar.',

        'admin.edit_service': 'Editar servicio',
        'admin.new_service_title': 'Nuevo servicio',
        'admin.form_name': 'Nombre',
        'admin.form_description': 'Descripción',
        'admin.form_url': 'URL',
        'admin.form_category': 'Categoría',
        'admin.form_color': 'Color',
        'admin.form_icon': 'Icono',
        'admin.cancel': 'Cancelar',
        'admin.save': 'Guardar',
        'admin.add': 'Añadir',

        'admin.placeholder_search': 'Buscar...',
        'admin.placeholder_description': 'Breve descripción...',
        'admin.placeholder_category': 'Infraestructura...',
        'admin.placeholder_name': 'Mi Servicio',

        'admin.delete_title': 'Eliminar servicio',
        'admin.delete_confirm': '¿Eliminar <strong>{name}</strong>? Esta acción es irreversible.',
        'admin.delete': 'Eliminar',

        'toast.service_updated': 'Servicio modificado',
        'toast.service_added': 'Servicio añadido',
        'toast.service_deleted': 'Servicio eliminado',
        'toast.export_done': 'Exportación descargada',
        'toast.import_done': 'Importación exitosa',
        'toast.import_error': 'Error durante la importación',

        'theme.light': 'Claro',
        'theme.system': 'Sistema',
        'theme.dark': 'Oscuro',
    }
};

function getLang() {
    return localStorage.getItem(I18N_KEY) || 'fr';
}

function setLang(lang) {
    if (SUPPORTED_LANGS.includes(lang)) {
        localStorage.setItem(I18N_KEY, lang);
        document.documentElement.lang = lang;
        translatePage();
        translatePlaceholders();
        updateLangSelector();
        // Re-render dynamic content if a render function exists
        if (typeof render === 'function') render();
        if (typeof refreshApp === 'function') refreshApp();
    }
}

function t(key, params) {
    const lang = getLang();
    let str = (translations[lang] && translations[lang][key]) || (translations.fr && translations.fr[key]) || key;
    if (params) {
        Object.keys(params).forEach(k => {
            str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
        });
    }
    return str;
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    // Also handle data-i18n-html for innerHTML (used in delete confirm)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        el.innerHTML = t(key);
    });
    // Update title attributes (theme buttons)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
}

function translatePlaceholders() {
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
}

function updateLangSelector() {
    const lang = getLang();
    // Update the displayed current language
    document.querySelectorAll('.lang-current-flag').forEach(img => {
        img.src = 'assets/flags/' + lang + '.svg';
        img.alt = LANG_NAMES[lang];
    });
    document.querySelectorAll('.lang-current-name').forEach(el => {
        el.textContent = LANG_NAMES[lang];
    });
    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

function toggleLangDropdown(e) {
    e.stopPropagation();
    const dropdown = e.currentTarget.closest('.lang-picker').querySelector('.lang-dropdown');
    const isOpen = dropdown.classList.contains('open');
    // Close all
    document.querySelectorAll('.lang-dropdown.open').forEach(d => d.classList.remove('open'));
    if (!isOpen) dropdown.classList.add('open');
}

function selectLang(lang, e) {
    e.stopPropagation();
    document.querySelectorAll('.lang-dropdown.open').forEach(d => d.classList.remove('open'));
    setLang(lang);
}

// Close dropdown on outside click
document.addEventListener('click', () => {
    document.querySelectorAll('.lang-dropdown.open').forEach(d => d.classList.remove('open'));
});

function buildLangSelector() {
    const lang = getLang();
    return `<div class="lang-picker">
        <button type="button" class="lang-trigger" onclick="toggleLangDropdown(event)">
            <img class="lang-current-flag" src="assets/flags/${lang}.svg" alt="${LANG_NAMES[lang]}" width="18" height="13">
            <span class="lang-current-name">${LANG_NAMES[lang]}</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="lang-dropdown">
            ${SUPPORTED_LANGS.map(l => `
                <button type="button" class="lang-option ${l === lang ? 'active' : ''}" data-lang="${l}" onclick="selectLang('${l}', event)">
                    <img src="assets/flags/${l}.svg" alt="${LANG_NAMES[l]}" width="18" height="13">
                    <span>${LANG_NAMES[l]}</span>
                </button>
            `).join('')}
        </div>
    </div>`;
}

// Initialize language on load
(function initI18n() {
    document.documentElement.lang = getLang();
})();
