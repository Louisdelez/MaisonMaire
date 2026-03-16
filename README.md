# Maison Maire

A modern, self-hosted service hub to centralize all your projects and services in one place. Simple, fast, no backend required.

![Light Mode](https://img.shields.io/badge/theme-light-f5f5f7) ![Dark Mode](https://img.shields.io/badge/theme-dark-0a0a0a) ![License](https://img.shields.io/github/license/Louisdelez/MaisonMaire)

## Features

- **Service Dashboard** — Clean grid of cards with icons, descriptions and direct links to your services
- **Admin Panel** — Dedicated interface to add, edit and delete services (table view, forms, icon picker, color picker)
- **Authentication** — Login/Register system to protect the admin panel
- **Dark / Light / System** — Three theme modes with persistence
- **Internationalization** — 5 languages supported: Francais, English, Deutsch, Italiano, Espanol
- **Search & Filter** — Real-time search bar and category filtering
- **Export / Import** — Backup and restore your services as JSON
- **Responsive** — Works on desktop, tablet and mobile
- **Zero dependencies** — Pure HTML/CSS/JS, no build step, no backend. Only external resource is Lucide icons via CDN

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Louisdelez/MaisonMaire.git
   cd MaisonMaire
   ```

2. Serve the files with any web server:
   ```bash
   # Python
   python3 -m http.server 8080

   # Node.js
   npx serve .

   # Or simply open index.html in your browser
   ```

3. Open `http://localhost:8080` for the hub

4. Navigate to `/login.html` to create an account and access the admin panel at `/admin.html`

## Project Structure

```
MaisonMaire/
├── index.html              # Public hub page
├── login.html              # Login / Register page
├── admin.html              # Admin panel (protected)
├── css/
│   └── style.css           # Shared styles, themes, responsive
├── js/
│   ├── app.js              # Hub initialization, search, filters
│   ├── render.js           # Card grid and category rendering
│   ├── services.js         # CRUD operations, localStorage, export/import
│   ├── admin.js            # Admin forms, icon picker, delete confirm
│   ├── auth.js             # Authentication (register, login, session)
│   ├── i18n.js             # Translations (FR/EN/DE/IT/ES)
│   ├── icons.js            # Curated Lucide icon list
│   └── theme.js            # Dark/Light/System theme toggle
├── assets/
│   ├── favicon.svg
│   └── flags/              # SVG country flags for language selector
│       ├── fr.svg
│       ├── en.svg
│       ├── de.svg
│       ├── it.svg
│       └── es.svg
└── LICENSE
```

## Data Storage

All data is stored in the browser's `localStorage`:

| Key | Content |
|-----|---------|
| `mm-services` | Array of services |
| `mm-auth-users` | Registered user accounts (passwords hashed with SHA-256) |
| `mm-session` | Current session |
| `mm-theme` | Theme preference (light / dark / system) |
| `mm-lang` | Language preference |

Use the **Export/Import** feature in the admin panel to backup or migrate your data.

## Adding a Service

1. Go to `/login.html` and create an account
2. In the admin panel, click **New service**
3. Fill in: name, description, URL, category, icon (from 150+ Lucide icons), color
4. Click **Add** — the service appears immediately on the hub

## License

[MIT](LICENSE)
