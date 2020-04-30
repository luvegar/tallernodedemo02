const http = require('http')

const app = http.createServer(function(req, res){
    res.end('Hello World!!!')
}).listen(3000)