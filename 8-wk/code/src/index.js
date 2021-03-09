const server = require('http').createServer();

server.on('request', (req, res)=>{
    console.log('Connected to server!');
    // const parsedUrl = url.parse(req.url, true);
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.write(JSON.stringify({name:'Chukky'}));
        res.end()
    }
});

server.on('close',()=>{
    console.log('Connection terminated')
})

server.on('')

server.listen(3000);