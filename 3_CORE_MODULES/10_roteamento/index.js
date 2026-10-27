
const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const port = 80

const server = http.createServer((req, res) => {

    // Identifica a URL solicitada
    const urlInfo = new url.URL(req.url, 'http://localhost')

    // Obtém o caminho da página
    let pagina = urlInfo.pathname

    // Se acessar a raiz do site, carrega o index.html
    if (pagina === '/') {
        pagina = '/index.html'
    }

    // Constrói o caminho completo do arquivo
    const arquivo = path.join(__dirname, pagina)

    // Lê o arquivo HTML
    fs.readFile(arquivo, (err, data) => {

        // Verifica se ocorreu algum erro
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8'
            })

            return res.end('Erro 404: página não encontrada!')
        }

        // Envia o conteúdo do arquivo
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        res.end(data)
    })

})

server.listen(port, () => {
    console.log(`Servidor Online na porta ${port}`)
})
