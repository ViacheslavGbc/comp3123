const fs = require('fs');
const { resolve } = require('path');

let curdir = `${process.cwd()}\\question3\\Logs`;

const deleteDirFilesUsingPattern = (pattern, dirPath) => {

  fs.readdir(resolve(dirPath), (err, fileNames) => {
    process.chdir(curdir);
    
    if (err) throw err;

    for (const name of fileNames) {
        console.log(`delete files.. ${name}`);
        if (pattern.test(name)) {
          fs.unlink(resolve(name), (err) => {
            
            if (err) throw err;
          
        });
      }
    }
  });
}

deleteDirFilesUsingPattern(/^log+/, curdir);
//
process.chdir(`../`);

fs.rmdir(__dirname+"\\Logs", (err) => {
  if (err) throw err;
  console.log('successfully deleted Logs');
});
