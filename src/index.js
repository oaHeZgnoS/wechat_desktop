import { app, BrowserWindow, dialog, Menu, globalShortcut } from 'electron';
const isDev = require('electron-is-dev');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // Create the browser window.
  Menu.setApplicationMenu(null);
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  // mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.loadURL(`http://go26606840.zicp.vip/`);

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async function() {
    // in onReady() handler:
    try {
        //await endStarter.startServer();
        await createWindow();
        //await listener.initialize();
        console.log(`port:${process.env.PORT}`);
        console.log("locale: " + app.getLocale());
        
        // Register a 'CommandOrControl+Y' shortcut listener. 注册快捷键
        globalShortcut.register("F11", ()=> {
            if (mainWindow.webContents.isDevToolsOpened()) {
                mainWindow.webContents.closeDevTools()
            } else {
                mainWindow.webContents.openDevTools();
            }
        });
        // 验证是否注册成功
        console.log(globalShortcut.isRegistered('F11'));
        
    } catch(error){
        dialog.showErrorBox('Error: ', error === null ? "unknown" : (error.msg || error).toString());
        app.quit();
    }
    setTimeout(() => {
        // 延时5S，检测是否有更新
        // autoUpdater.checkForUpdates(null,BrowserWindow.getFocusedWindow());
    }, 5000)
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
