#!/usr/bin/env node

/**
 * After prepare, files are copied to the platforms/ios and platforms/android folders.
 * Lets clean up some of those files that arent needed with this hook.
 */
var fs = require('fs');
var path = require('path');

var deleteFolderRecursive = function(removePath) {
  if( fs.existsSync(removePath) ) {
    fs.readdirSync(removePath).forEach(function(file,index){
      var curPath = path.join(removePath, file);
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(removePath);
  }
};

var datetimepicker = path.resolve(__dirname, '../../platforms/android/assets/www/lib/angular-bootstrap-datetimepicker');
var angular_mocks = path.resolve(__dirname, '../../platforms/android/assets/www/lib/angular-mocks');
var ionic_css = path.resolve(__dirname, '../../platforms/android/assets/www/lib/ionic/css');
var ionic_js = path.resolve(__dirname, '../../platforms/android/assets/www/lib/ionic/js');
var font_awsome = path.resolve(__dirname, '../../platforms/android/assets/www/lib/fontawsome/fontawesome-webfont.svg');

deleteFolderRecursive(datetimepicker);
deleteFolderRecursive(angular_mocks);
deleteFolderRecursive(ionic_css);
deleteFolderRecursive(ionic_js);

