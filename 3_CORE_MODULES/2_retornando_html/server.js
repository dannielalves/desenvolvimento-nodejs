const http = require('http')

const port = 80

const server = http.createServer((req, res)=> {
    res.writeHead(200, {'content-type': 'text/html; charset= utf8'})
    res.write('<h1>Bem-vindo ao Servidor</h1>')
    res.end()
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))