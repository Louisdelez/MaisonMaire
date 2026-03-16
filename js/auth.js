const AUTH_KEY = 'mm-auth-users';
const SESSION_KEY = 'mm-session';

function getUsers() {
    try { return JSON.parse(localStorage.getItem(AUTH_KEY)) || []; }
    catch { return []; }
}

function saveUsers(users) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function register(username, password) {
    if (!username || !password) return { ok: false, error: t('error.fields_required') };
    if (password.length < 4) return { ok: false, error: t('error.password_too_short') };

    const users = getUsers();
    if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
        return { ok: false, error: t('error.username_taken') };
    }

    const hashed = await hashPassword(password);
    users.push({ id: crypto.randomUUID(), username, password: hashed, createdAt: Date.now() });
    saveUsers(users);

    setSession(username);
    return { ok: true };
}

async function login(username, password) {
    if (!username || !password) return { ok: false, error: t('error.fields_required') };

    const users = getUsers();
    const hashed = await hashPassword(password);
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === hashed);

    if (!user) return { ok: false, error: t('error.invalid_credentials') };

    setSession(user.username);
    return { ok: true };
}

function setSession(username) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ username, loggedAt: Date.now() }));
}

function getSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)); }
    catch { return null; }
}

function logout() {
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'login.html';
}

function requireAuth() {
    const session = getSession();
    if (!session) {
        window.location.href = 'login.html';
        return false;
    }
    return session;
}

function isLoggedIn() {
    return !!getSession();
}
