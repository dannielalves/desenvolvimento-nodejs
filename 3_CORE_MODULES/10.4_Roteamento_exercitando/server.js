const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3004

const server = http.createServer((req, res)=> {
    res.end('testando...')
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))