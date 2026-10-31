const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3003

const server = http.createServer((req, res) => {
    const urlInfo = new url.URL(req.url, 'http://localhost')
    const pag = urlInfo.pathname.substring(1)
    
     
})

server.listen(port, console.log(`Servidor Online na porta ${port}`))