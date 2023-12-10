const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('Welcome to the home page')
    }
    if(req.url === '/about'){
        res.end('We are on the about page')
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>Can't find the page you're looking for</p>
    <a href='/'>Go home</a>`,(err)=>{
        console.log(err)
    })
})

server.listen(5000);