const fs = require('fs');
const { resolve } = require('path');

let curdir = `${process.cwd()}\\question3\\logs`;

var dir = '.\\Logs';
curdir = `${process.cwd()}\\question3`
process.chdir(curdir);

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

data='Some really sensitive data';
for(let i=0; i<10;i++)
{
   fs.writeFile(`${curdir}\\Logs\\log${i}.txt`, data, { flag: 'w' }, function (err) {
    if (err) throw err;
    console.log(`log${i}.txt`);
  })
}