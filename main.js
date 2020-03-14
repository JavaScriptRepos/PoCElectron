const { app, BrowserWindow, Menu, dialog } = require('electron')


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 550,
    height: 500,
    backgroundColor: "#cc9900",
    resizable: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }  
  })

  var dev = BrowserWindow.getAllWindows();

  // and load the index.html of the app.
  win.setPosition(100,100);
  win.webContents.openDevTools();
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

/* EJEMPLO DE MENU
  template = [
  {
    label: 'Edit',
    click: async() => {
      const options = {
        type: 'error',
        buttons: ['Ok'],
        defaultId: 2,
        title: 'Error!!',
        message: 'Do you want to do this?',
        detail: 'It does not really matter',
        checkboxLabel: 'Remember my answer',
        checkboxChecked: true,
      };
      
      dialog.showMessageBox(null, options, (response, checkboxChecked) => {
        console.log(response);
        console.log(checkboxChecked);
      });
      
    }
  },
  {
    label: 'Copy',
    click: 
      dev.openDevTools
    
  },
  {
    label: 'Send'
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
 */
