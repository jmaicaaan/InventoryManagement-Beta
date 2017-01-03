var gulp = require('gulp'),
    childProcess = require('child_process'),
    electron = require('electron-prebuilt'),
    jetpack = require('fs-jetpack'),
    usemin  = require('gulp-usemin'),
    uglify = require('gulp-uglify');
  
var projectDir = jetpack,
    srcDir = projectDir.cwd('./app'),
    destDir = projectDir.cwd('./build');

var release_windows = require('./build.windows'); 
var os = require('os'); 

gulp.task('run', () => {
    childProcess.spawn(electron, ['.'], {stdio: 'inherit'});
});

gulp.task('clean', (callback) => { 
    return destDir.dirAsync('.', { empty: true }); 
});

gulp.task('copy', ['clean'], function () { 
    return projectDir.copyAsync('app', destDir.path(), { 
        overwrite: true, matching: [ 
            './node_modules/**/*', 
            '*.html', 
            '*.css', 
            'main.js', 
            'package.json',
            './icons/**',
            'server-config.json'
       ] 
    }); 
});

gulp.task('build', ['copy'], function () { 
  return gulp.src('./app/index.html') 
    .pipe(usemin({ 
      js: [uglify()] 
    })) 
    .pipe(gulp.dest('build/')); 
}); 

gulp.task('build-electron', ['build'], function () { 
     switch (os.platform()) { 
         case 'darwin': 
         // execute build.osx.js 
         break; 
         case 'linux': 
         //execute build.linux.js 
         break; 
         case 'win32': 
         return release_windows.build(); 
     } 
}); 