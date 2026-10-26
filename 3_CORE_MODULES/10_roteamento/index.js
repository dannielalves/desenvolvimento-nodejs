const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 80

const server = http.createServer((req, res) => {
    
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
        // res.end(`<h1>Servidor Online</h1>`)

        
           fs.readFile('index.html', (err, data)=> {
               return res.end(data)
           })
        
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))