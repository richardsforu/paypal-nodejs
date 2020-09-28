// File Operations

let fs = require('fs');

//  step1: open file and read contenty and display

let menu = fs.readFileSync('./menu.txt','UTF8');

console.log(menu);

// step2 :
console.log('continue with othert work...');
