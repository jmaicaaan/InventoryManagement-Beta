
const {app, BrowserWindow} = require('electron')
var mainWindow = null;
        


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {

  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  mainWindow.loadURL('https://jmaicaaan.github.io/InventoryManagement-Beta/app/#!/');
  // mainWindow.loadURL('file://' + __dirname + '/index.html');
  
  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});