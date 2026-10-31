
const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3003

const server = http.createServer((req, res) => {

    const urlInfo = new url.URL(req.url, 'http://localhost')

    // Identifica o arquivo solicitado
    let filename = urlInfo.pathname.substring(1)

    // Se acessar a raiz, carrega index.html
    if (filename === '') {
        filename = 'index.html'
    }

    // Verifica se o arquivo existe
    if (fs.existsSync(filename)) {

        fs.readFile(filename, (err, data) => {

            if (err) {
                res.writeHead(500, {
                    'Content-type': 'text/html; charset=utf-8'
                })

                return res.end('Erro ao ler o arquivo.')
            }

            res.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })

            return res.end(data)

        })

    } else {

        // Arquivo não encontrado: carrega 404.html
        fs.readFile('404.html', (err, data) => {

            res.writeHead(404, {
                'Content-type': 'text/html; charset=utf-8'
            })

            if (err) {
                return res.end('Página não encontrada!')
            }

            return res.end(data)

        })

    }

})

server.listen(port, () => {
    console.log(`Servidor Online na porta ${port}`)
})