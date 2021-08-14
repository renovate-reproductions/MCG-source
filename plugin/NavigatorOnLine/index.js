module.exports = async (app, BrowserWindow) => {
    let onlineStatusWindow

    function createWindow() {
        onlineStatusWindow = new BrowserWindow({
            width: 0, height: 0, show: false,
            webPreferences: {
                sandbox: true
            }
        })
        onlineStatusWindow.loadURL(`file://${__dirname}/index.html`)
        onlineStatusWindow.webContents.openDevTools();
    }

    app.whenReady().then(() => {
        createWindow()// <-- function createWindow のやつを動かす。
    })
}
