const {createReadStream} = require('fs')

const stream = createReadStream('./content/big-text-file.txt',{highWaterMark: 90000},{encoding: 'utf8'});

//default: 64kb
//last buffer: remainder
//highwatermark: control size


stream.on('data',(result)=>{   //data is the event used for chunk of data, other events are close,end,error,pause,readable,resume
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err);
})