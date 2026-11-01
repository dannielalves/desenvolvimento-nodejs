const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3004

const server = http.createServer((req, res)=> {
    //Capturando informações da url (requisição)
    const urlInfo = new url.URL(req.url, 'http://localhost')
    //Identifica o nome do arquivo que está na url sem a barra
    // let file = urlInfo.pathname.substring(1)
    let file = '../10.3_roteamento/' + urlInfo.pathname.substring(1)
    //Acessando a raiz '/' quando não  há arquivos para ler exceto a pagina index.html
    if(urlInfo.pathname.substring(1) === ''){
        //Se não houve nome significa que estamos na home
        file = '../10.3_roteamento/index.html'
    }
    //Verificando se o arquivo existe
    if(fs.existsSync(file)){
        fs.readFile(file, (err, data)=> {
            if(err){
                res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                return res.end('Erro ao ler o arquivo')
            }
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
            res.end(data)
        })
    } else { //Se o arquivo não existir devemos mostrar a pagina 404.html
        fs.readFile('../10.3_roteamento/404.html', (err, data) => {
            if(err){
                res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'})
                return res.end('404 | Página não encontrada')
            }
            res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'})
                res.end(data)
        })

    }
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))