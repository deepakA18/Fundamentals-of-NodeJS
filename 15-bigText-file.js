const {writeFileSync} = require('fs');

for (let index = 0; index < 10000; index++) {
    writeFileSync('./content/big-text-file.txt',`The number is ${index}\n`,{flag: 'a'});
}

