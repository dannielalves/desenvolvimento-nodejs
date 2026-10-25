const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 80

const server = http.createServer((req, res) => {
    const urlInfo = new url.URL(req.url, 'http://localhost')

    const name = urlInfo.searchParams.get('name')

    if(!name){
        fs.readFile('index.html', (err, data) => {
            if(err) {
                res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                return res.end(`<h1>Erro de servidor, tente novamente mais tarde</h1>`)    
            } 
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end(data)
        })

    } else {
        fs.writeFile('arquivo.txt', name, (err, data) => {
            res.writeHead(302, {Location: '/'})
            res.end()
        })

    }



})

server.listen(port, () => console.log(`Servidor Online na porta ${port}`))