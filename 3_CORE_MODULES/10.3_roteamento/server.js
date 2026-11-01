const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3003

const server = http.createServer((req, res)=> {
    res.end('SERVIDOR ONLINE')
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}.`))