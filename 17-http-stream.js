//instead of sending the data in instance we are sending it in chunks
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
   const fileStream = fs.createReadStream('./content/big-text-file.txt','utf8')
   
   fileStream.on('open',()=>{
        fileStream.pipe(res);  //pipe method is used to push data from readStream to writeStream 
   })
   fileStream.on('error',(err)=> {
    res.end(err);
   })
}).listen(5000);
