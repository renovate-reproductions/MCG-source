//アプリケーションを制御し、ネイティブなブラウザウィンドウを作成するモジュール
const { app, Menu, BrowserWindow, dialog, Notification, globalShortcut, nativeTheme } = require('electron')
const path = require('path')
app.setName("MultiCommentGenerator")
app.setAppUserModelId("electron.commentgeneratorcollection.multicommentgenerator");

let window

//------------------------------------
// About Panelの内容をカスタマイズする
//------------------------------------
const aboutPanel = function () {
   dialog.showMessageBox({
      title: `${app.name}について`,
      message: `${app.name} ${app.getVersion()}`,
      detail: `Made with 💗 by CommentGeneratorCollection.`,
      buttons: ['OK'],
      icon: 'assets/img/icon.png'
   });
}

//------------------------------------
// メニュー
//------------------------------------
// メニューを準備する

const template = Menu.buildFromTemplate([
   {
      label: app.name,
      submenu: [
         { role: 'about', label: `${app.name}について` },
         { type: 'separator' },
         { role: 'services', label: 'サービス' },
         { type: 'separator' },
         { role: 'hide', label: `${app.name}を隠す` },
         { role: 'hideothers', label: 'ほかを隠す' },
         { role: 'unhide', label: 'すべて表示' },
         { type: 'separator' },
         { role: 'quit', label: `${app.name}を終了` }
      ]
   },
   {
      label: 'ファイル',
      submenu: [
         { role: 'close', label: 'ウィンドウを閉じる' }
      ]
   },
   {
      label: '編集',
      submenu: [
         { role: 'undo', label: '元に戻す' },
         { role: 'redo', label: 'やり直す' },
         { type: 'separator' },
         { role: 'cut', label: '切り取り' },
         { role: 'copy', label: 'コピー' },
         { role: 'paste', label: '貼り付け' },
         { role: 'pasteAndMatchStyle', label: 'ペーストしてスタイルを合わせる' },
         { role: 'delete', label: '削除' },
         { role: 'selectAll', label: 'すべてを選択' },
         { type: 'separator' },
         {
            label: 'スピーチ',
            submenu: [
               { role: 'startSpeaking', label: '読み上げを開始' },
               { role: 'stopSpeaking', label: '読み上げを停止' }
            ]
         }
      ]
   },
   {
      label: '表示',
      submenu: [
         { role: 'reload', label: '再読み込み' },
         { role: 'forceReload', label: '強制的に再読み込み' },
         { role: 'toggleDevTools', label: '開発者ツールを表示' },
         { type: 'separator' },
         { role: 'resetZoom', label: '実際のサイズ' },
         { role: 'zoomIn', label: '拡大' },
         { role: 'zoomOut', label: '縮小' },
         { type: 'separator' },
         { role: 'togglefullscreen', label: 'フルスクリーン' }
      ]
   },
   {
      label: 'ウィンドウ',
      submenu: [
         { role: 'minimize', label: '最小化' },
         { role: 'zoom', label: 'ズーム' },
         { type: 'separator' },
         { role: 'front', label: 'ウィンドウを手前に表示' },
         { type: 'separator' },
         { role: 'window', label: 'ウィンドウ' }
      ]
   },
   {
      label: 'ヘルプ',
      submenu: [
         { label: `${app.name} ヘルプ` },    // ToDo
         { type: 'separator' },
         { click: aboutPanel, label: `${app.name}について` }
      ]
   },

   {
      label: "Options",
      submenu: [
         {
            label: `${app.name}を完全終了する`,
            click: () => app.quit()
         }
      ]
   }
]);
//*/
// メニューを適用する
Menu.setApplicationMenu(template);


function createWindow() {
   //ブラウザウィンドウを作成します。
   window = new BrowserWindow({
      width: 400,
      height: 600,
      minWidth: 400,
      minHeight: 600,
      maxWidth: 600,
      maxHeight: 800,
      frame: true,
      backgroundColor: nativeTheme.shouldUseDarkColors ? '#1e1e1e' : '#ffffff',
      webPreferences: {
         preload: path.join(__dirname, 'theme/simple/preload.js'),
         nodeIntegration: false,
      },
   })
   window.webContents.openDevTools();
   //アプリのindex.htmlを読み込みます。
   window.loadFile('theme/simple/index.html')
}

function showNotification() {
   //通知を表示します。
   const notification = {
      title: 'Basic Notification',
      body: 'Notification from the Main process'
   }
   new Notification(notification).show()
}

// このメソッドは、Electronが初期化を終え、ブラウザウィンドウを作成する準備ができたときに呼び出されます。
// 初期化が完了し、ブラウザウィンドウを作成する準備ができたときに呼び出されます。
// いくつかのAPIは、このイベントが発生した後にのみ使用できます。
app.whenReady().then(() => {/*
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    console.log('Devtool Block')
  })//*/
}).then(() => {
   createWindow()// <-- function createWindow のやつを動かす。
   /*
     window.setProgressBar(0.555555555555,{mode:"paused"})
     setTimeout(() => {
      window.setProgressBar(0)
      setTimeout(() => {
        window.setProgressBar(0.2)
        setTimeout(() => {
         window.setProgressBar(0.25)
         setTimeout(() => {
           window.setProgressBar(0.3,{mode:"error"})
           setTimeout(() => {
            window.setProgressBar(0.9)
            setTimeout(() => {
              window.setProgressBar(0.99)
              setTimeout(() => {
               window.setProgressBar(1)
               setTimeout(() => {
                 window.setProgressBar(-1)//win11では動作しない
                 setTimeout(() => {
                  window.setProgressBar(2)
                 }, 2000)
               }, 2000)
              }, 2000)
            }, 2000)
           }, 2000)
         }, 2000)
        }, 2000)
      }, 2000)
     }, 2000)
   //*/
   // このリスナーは、アプリケーションが起動した後に動きます。
   app.on('activate', () => {

      // 表示されているウィンドウがないときにのみ動きます。(バックグラウンド処理など)
      /*
      if (BrowserWindow.getAllWindows().length === 0) {
        // 新しいブラウザウィンドウを作成します。
        createWindow()
      }
      //*/
   })

}).then(() => {
   //showNotification()
})

function plugin() {
   require("./plugin/index.js")(app, BrowserWindow);
}
plugin()


// 開いているウィンドウがなくなったときにのみ動きます。
// プラグイン関係で動かないけど、念のため。
app.on('window-all-closed', () => {
   // アプリケーションを終了！！
   app.quit()
})
