const http = require('http')

const port = 80

const server = http.createServer((req, res) =>{

    res.writeHead(200, {'content-type':'text/html; charset=utf-8'})

    res.write('<h1>Olá, você está conectado ao servidor! Daniel</h1>')
    res.end()

})

server.listen(port, () => console.log('Servidor Online na porta:'+port))