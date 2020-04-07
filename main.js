const { app, BrowserWindow, ipcMain } = require('electron')
const {download} = require("electron-dl");

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 560,
    backgroundColor: "#cc9900",
    resizable: false,
    alwaysOnTop: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }  
  })

  var dev = BrowserWindow.getAllWindows();

  // and load the index.html of the app.
  win.setPosition(100,100);
  //win.webContents.openDevTools();
  win.loadFile('public/index.html')
}

app.whenReady().then(createWindow)
ipcMain.on("download", (event, info) => {
  debugger;
  download(BrowserWindow.getFocusedWindow(), info.url, info.properties)
      .then(dl => window.webContents.send("download complete", dl.getSavePath()));
});
