// let exec = require('child_process').exec;
// let fs = require('fs');
// let path = require('path');
// let jetpack = require('fs-jetpack');
// let catalinaHome;
// let projectDir;
// let manifest;
// let appDir;
// let destPath;
// let buildPath;

// init();

// function init(){
//     catalinaHome = process.env.CATALINA_HOME;
//     destPath = catalinaHome.replace('bin', 'webapps');
//     projectDir = jetpack;
//     appDir = projectDir.dir('./app');
//     buildPath = projectDir.dir('./build');
//     manifest = appDir.read('./package.json', 'json');
    
//     hasWarFile();
//     moveFrontFolder();
// }

// function checkAppStatus(){

// }

// function hasCatalinaTomcatEnvironment(){
//     return catalinaHome? true : false;
// }

// function hasWarFile(){
//     let warFileName = [manifest.name, '.war'].join(''),
//         filePath = path.join(destPath, warFileName);
        
//    fs.stat(filePath, (err, stats) => {
//        if(!stats || err)
//         return false;
//    });

//    return true;
// }

// function moveFrontFolder(){
  
// }