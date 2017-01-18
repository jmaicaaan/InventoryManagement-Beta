const {app, BrowserWindow, dialog} = require('electron')
const path = require('path');
const spawn = require('child_process').spawn;
const eventEmiter = require('events');
const manifest = require('./package.json');
const server_manifest = require('./server-config.json');

const apacheTomcatEmiter = new eventEmiter();

let mainWindow = null,
  projectUrl = null;

init();

app.on('ready', onAppReady);
app.on('window-all-closed', onAppClose);

function init() {

  //appDir is not used in prod, the builded application is rooted.

  let projectDir = __dirname,
    projectName = manifest.name,
    projectPort = server_manifest.port;
  projectUrl = [server_manifest.url, ':', projectPort, '/', projectName].join('');

  startApacheTomcat();
}

function onAppReady() {
  let windowConfig = {
    width: 800,
    height: 600,
    icon: path.join(__dirname, '/icons/icon.ico'),
    webPreferences: {
      preload: path.join(__dirname + '/preload.js')
    }
  };

  mainWindow = new BrowserWindow(windowConfig);
  // mainWindow.loadURL(projectUrl);

  apacheTomcatEmiter.on('end', () => {
    mainWindow.loadURL(projectUrl);
  });

  // Open the devtools.
  // mainWindow.openDevTools();



  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function onAppClose() {
  if (process.platform != 'darwin') {
    app.quit();
  }
}


function startApacheTomcat() {
  let CATALINA_HOME = process.env['CATALINA_HOME'],
    errorTitle = 'Apache Tomcat Server',
    errorMessage = 'Please set CATALINA_HOME to your Apache Tomcat folder in your system environment variables.';

  if (CATALINA_HOME === undefined) {
    dialog.showErrorBox(errorTitle, errorMessage);
    app.quit();
  }

  let startupBat = spawn('cmd.exe', ['/c', 'startup.bat']);

  startupBat.stdout.on('data', (data) => {
    apacheTomcatEmiter.emit('end');
  });

  startupBat.stderr.on('data', (data) => {
    dialog.showErrorBox(errorTitle, [errorMessage, data].join(''));
    app.quit();
  });

  startupBat.on('close', (code) => {
    app.quit();
  });
}