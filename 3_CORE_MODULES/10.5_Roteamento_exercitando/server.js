const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 3010

const server = http.createServer((req, res)=> {
      //Pegar as informações da url requisição
      const urlInfo = new url.URL(req.url, 'http://localhost')
      //Pegar o nome do arquivo que está no endereço da url após a barra '/' da raiz
      let file = urlInfo.pathname.substring(1) 
      //Verificar se existe algo após a barra da raiz, se não existir significa que será exibida index.html
      if(file === ""){
        file = "index.html"
      }
      //Verificar se o arquivo existe
      if(fs.existsSync(file)){
        fs.readFile(file, (err, data)=> {
            if(err){
                res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                return res.end('Erro ao ler arquivo!')
            }
            res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})
            res.end(data)
        })
      } else { //Se não existir, mostrar a página 404.html
        fs.readFile('404.html',(err, data)=> {
            if(err){
                res.writeHead(404, {'Content-type':'text/html; charset=utf-8'})
                return res.end('Erro interno do servidor')  
            }
            res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'})
            res.end(data)
        })
        
      }
      
})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))