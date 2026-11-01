const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3003
//Criando servidor de roteamento simples com Core Modules em Node.js
const server = http.createServer((req, res)=> {
    //Capturando informações da url (requisição)
    const info_url = new url.URL(req.url, 'http://localhost')
    //Identifica o nome do arquivo que está na url sem a barra
    let file = info_url.pathname.substring(1)

    //Acessando a raiz '/' quando não  há arquivos para ler exceto a pagina index.html
    if(file === ''){
        file = 'index.html' //Se não houve nome significa que estamos na home
    }
    //Verificando se o arquivo existe
    if(fs.existsSync(file)){
        fs.readFile(file, (err,data)=>{
            if(err){
                res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                return res.end(`Erro ao ler o arquivo.`)
            }
            res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            res.end(data)
        })
    } else { //Se o arquivo não existir devemos mostrar a pagina 404.html
        fs.readFile('404.html', (err, data)=> {
            if(err){
                res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                return res.end(`Erro ao ler o arquivo.`)
            }
            res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            res.end(data)
        })
    }
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}.`))