const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path') //Módulo path adicionado na correção
const port = 3011

//Diretório onde ficarão os arquivos públicos adicionado na correção
const publicDir = path.join(__dirname, 'public')

// Função para identificar o Content-Type adicionado na correção
const tipos = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
}
const server = http.createServer((req, res)=> {
      //Pegar as informações da url requisição
      const urlInfo = new url.URL(req.url, 'http://localhost')
      //Pegar o nome do arquivo que está no endereço da url após a barra '/' da raiz
      let file = decodeURIComponent(urlInfo.pathname.substring(1)) //adicionado na correção
      //Verificar se existe algo após a barra da raiz, se não existir significa que será exibida index.html
      if(file === ""){
        file = "index.html"
      }
    // Montar o caminho completo do arquivo
    const caminhoArquivo = path.resolve(publicDir, file)
    // Verificar se o arquivo está dentro da pasta public adicionado na correção
    if(!caminhoArquivo.startsWith(publicDir + path.sep)){
        res.writeHead(403, {'Content-type': 'text/html; charset=utf-8'})
        return res.end('Acesso não permitido')
    } 

    //Verificar se o arquivo existe
    fs.stat(caminhoArquivo, (err, stats)=> {
        if(err || !stats.isFile()){
             // Carregar página 404
             const pagina404 = path.join(publicDir, '404.html')

             return fs.readFile(pagina404, (err, data) => {
                res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'})
                if(err){
                    return res.end('Página não encontrada!')
                }
                res.end(data)
             })
        }
    // Identificar o tipo do arquivo
    const extensao = path.extname(caminhoArquivo)
    
    const contentType = tipos[extensao] || 'application/octet-stream'

    //Ler arquivo solicitado
    fs.readFile(caminhoArquivo, (err, data) => {
        if(err) {
            res.writeHead(500, {'Content-type': 'text/plain; charset=utf-8'})
            return res.end('Erro ao ler arquivo!')
        }

        res.writeHead(200, {'Content-type': contentType})

        res.end(data)
    })

    })  })

// Iniciar servidor
server.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))