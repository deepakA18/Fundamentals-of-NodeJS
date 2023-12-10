const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const { findSourceMap } = require('module');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

writeFileSync('./content/result.txt',`Here is the result: ${first}  ${second}`,{flags: 'hey'}); //3rd parameter(flags property) is to append in the file

console.log('done with this task');
console.log('starting the next one');