const EventEmittor = require('events');

const customEmittor = new EventEmittor();

//Here order matters: which is placed first occurs first. 
//built in modules utilize it
//events parameters: instance.method('event name',(para)=>{Callback})

customEmittor.on('response',(name,id)=>{      //on - listens the event 
    console.log(`data received user ${name} with id:${id}`);
})

customEmittor.on('response',()=>{
    console.log('data read');
})

customEmittor.emit('response','john',34);   //emits the event
