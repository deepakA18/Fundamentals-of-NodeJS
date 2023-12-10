const {readFile,writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{   //if 'utf8' not added we get buffer values
    if(err)
    {
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile(
            './content/result-aync.txt',
            `Here is the result : ${first}, ${second}`,
            (err,result)=> {
                if(err){
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }

        )
    })
}) 
console.log('starting the next one');

//Approach using event loops:
const {readFile, writeFile} = require('fs').promises
const start = async () => {
    try{
    const first = await readFile('./content/first.txt','utf-8')
    const second = await readFile('./content/second.txt','utf-8')
    await writeFile('./content/writefile-mind-grenade.txt',`THIS IS AWSM: ${first} ${second} `,({flag: 'a'}));
        console.log(first,second);
}
    catch(err){
        console.log(err);
    }
}

start();


//Alternative Approach I: using promise
// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//     })
// }

//Alternative Approach II: using util
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
