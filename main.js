const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
    Menu.setApplicationMenu(null);

    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        title: 'WhatsApp',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            spellcheck: true,
            partition: 'persist:whatsapp-session'
        }
    });

    // Force a modern, standard Chrome User-Agent (NO "Electron" keyword)
    const modernUA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';
    win.webContents.setUserAgent(modernUA);

    win.loadURL('https://web.whatsapp.com/');

    win.webContents.on('page-title-updated', (event, title) => {
        event.preventDefault();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
