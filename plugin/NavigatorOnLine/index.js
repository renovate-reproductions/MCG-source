module.exports = (app, BrowserWindow) => {
  let onlineStatusWindow

  function createWindow() {
    onlineStatusWindow = new BrowserWindow({
      width: 0,
      height: 0,
      show: false,
      webPreferences: {
        sandbox: true
      }
    })
    onlineStatusWindow.loadURL(`file://${__dirname}/index.html`)
  }

  app.whenReady().then(() => {
    createWindow()
  })
}
