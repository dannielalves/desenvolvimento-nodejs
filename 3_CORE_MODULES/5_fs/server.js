const http = require('http')
const fs = require('fs')
const port = 80
const server = http.createServer((req, res) => {

    
    // res.end(`<h1>Servidor está Online</h1>`)
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
        res.write(data)
        return res.end()
        
    })


})

server.listen(port, () => console.log(`Servidor Online na porta ${port}`))