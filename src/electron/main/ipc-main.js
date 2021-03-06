const { ipcMain } = require('electron')

ipcMain.on('did-finish-load', function () {
    const toWebview = global.p3x.onenote.conf.get('webview-onenote');
    global.p3x.onenote.window.onenote.webContents.send('p3x-onenote-onload-user', toWebview);
});

ipcMain.on('p3x-onenote-save', function (event, data) {
//    console.log('p3x-onenote-save', data)
    global.p3x.onenote.conf.set('webview-onenote', data);
    global.p3x.onenote.conf.set('window-bounds', global.p3x.onenote.window.onenote.getBounds());
})
