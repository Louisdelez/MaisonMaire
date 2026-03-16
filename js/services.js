const STORAGE_KEY = 'mm-services';

const DEFAULT_SERVICES = [
    {
        id: crypto.randomUUID(),
        name: "Portainer",
        description: "Gestion des conteneurs Docker via une interface web.",
        url: "https://portainer.example.com",
        icon: "container",
        color: "#0db7ed",
        category: "Infrastructure",
        order: 0
    },
    {
        id: crypto.randomUUID(),
        name: "Nextcloud",
        description: "Cloud personnel pour fichiers, calendrier et contacts.",
        url: "https://cloud.example.com",
        icon: "cloud",
        color: "#0082c9",
        category: "Productivité",
        order: 1
    },
    {
        id: crypto.randomUUID(),
        name: "Grafana",
        description: "Monitoring et tableaux de bord en temps réel.",
        url: "https://grafana.example.com",
        icon: "bar-chart-3",
        color: "#f46800",
        category: "Infrastructure",
        order: 2
    },
    {
        id: crypto.randomUUID(),
        name: "GitLab",
        description: "Dépôts Git, CI/CD et gestion de projets.",
        url: "https://gitlab.example.com",
        icon: "gitlab",
        color: "#fc6d26",
        category: "Développement",
        order: 3
    },
    {
        id: crypto.randomUUID(),
        name: "Home Assistant",
        description: "Domotique et automatisation de la maison.",
        url: "https://ha.example.com",
        icon: "home",
        color: "#41bdf5",
        category: "Domotique",
        order: 4
    },
    {
        id: crypto.randomUUID(),
        name: "Pi-hole",
        description: "Bloqueur de publicités au niveau DNS.",
        url: "https://pihole.example.com",
        icon: "shield",
        color: "#96060c",
        category: "Infrastructure",
        order: 5
    }
];

function loadServices() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        saveServices(DEFAULT_SERVICES);
        return [...DEFAULT_SERVICES];
    }
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function saveServices(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addService(data) {
    const list = loadServices();
    const service = {
        id: crypto.randomUUID(),
        name: data.name,
        description: data.description || '',
        url: data.url || '#',
        icon: data.icon || 'globe',
        color: data.color || '#5c5cff',
        category: data.category || 'Autre',
        order: list.length
    };
    list.push(service);
    saveServices(list);
    return service;
}

function updateService(id, data) {
    const list = loadServices();
    const idx = list.findIndex(s => s.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...data };
    saveServices(list);
    return list[idx];
}

function deleteService(id) {
    let list = loadServices();
    list = list.filter(s => s.id !== id);
    saveServices(list);
}

function getCategories() {
    const list = loadServices();
    const cats = [...new Set(list.map(s => s.category).filter(Boolean))];
    cats.sort();
    return cats;
}

function exportServices() {
    const data = JSON.stringify(loadServices(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'maison-maire-services.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importServices(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                if (!Array.isArray(data)) throw new Error('Format invalide');
                saveServices(data);
                resolve(data);
            } catch (e) {
                reject(e);
            }
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
