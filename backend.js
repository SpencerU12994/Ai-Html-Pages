const fs = require('fs')
const path = require('path')



//import fs from 'fs';
//import path from 'path';
//import process from 'process';



var moveFrom = "./HTML";

// Loop through all the files in the temp directory
fs.readdir(moveFrom, function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(function (file, index) {
    // Make one pass and make the file complete
    var fromPath = path.join(moveFrom, file);

    fs.stat(fromPath, function (error, stat) {
      if (error) {
        console.error("Error stating file.", error);
        return;
      }

      if (stat.isFile()) console.log("'%s' is a file.", fromPath);
      else if (stat.isDirectory())
        console.log("'%s' is a directory.", fromPath);
    });
  });
});