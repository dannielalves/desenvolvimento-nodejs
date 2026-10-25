const http = require('http')
const port = 80
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    res.write('<h1>Conceição</h1>')
    res.end()
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))