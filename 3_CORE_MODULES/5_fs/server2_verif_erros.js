const http = require('http')
const fs = require('fs')
const port = 80
const server = http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {

        if(err) {
            res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                return res.end('Erro ao carregar o arquivo.')
        }

        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})

        res.end(data)

    })


})

server.listen(port, () => console.log(`Servidor Online na porta ${port}.`))