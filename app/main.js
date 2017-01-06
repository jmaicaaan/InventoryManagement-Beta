const {app, BrowserWindow} = require('electron')
const path = require('path');
const fs = require('fs');
const manifest = require('./package.json');
const server_manifest = require('./server-config.json');
let mainWindow = null,
  projectDir = null,
  appDir = null,
  projectName = null,
  projectUrl = null,
  projectPort = null;

init();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {

  let windowConfig = {
    width: 800,
    height: 600,
    icon: path.join(__dirname, '/icons/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname + '/preload.js')
    }
  };

  // Create the browser window.
  mainWindow = new BrowserWindow(windowConfig);


  // and load the index.html of the app.
  mainWindow.loadURL(projectUrl);

  // Open the devtools.
  // mainWindow.openDevTools();

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

function init() {

  //appDir is not used in prod, the builded application is rooted.

  projectDir = __dirname;
  projectName = manifest.name;
  projectPort = server_manifest.port;
  projectUrl = [server_manifest.url, ':', projectPort, '/', projectName].join('');
}