const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 80

const server = http.createServer((req, res) => {
    const urlInfo = new url.URL(req.url, 'http://localhost')
    const pessoa = urlInfo.searchParams.get('pessoa')

        if(!pessoa){ //Caso não exista pessoa na url (searchParam)

            fs.readFile('index.html', (err, data) =>{
                if(err) {
                    res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                    return res.end('<h1>500 - Erro interno do servidor.</h1>')
                } else {
                    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
                    return res.end(data)
                }
            })

        } else { //Caso exista pessoa na url, devemos ler o nome da pessoa e salver em um arquivo de texto
            fs.appendFile('lista_pessoas.txt', `${pessoa}\r\n`, (err, data) => {
                if(err){ //Caso não seja possivel criar/ediar o arquivo "lista_pessoas.txt"
                    
                    res.writeHead(500, {'Content-type': 'text/html; charset=utf-8'})
                    return res.end('<h1>500 - Erro interno do servidor.</h1> <h2>Não foi possível editar o arquivo</h2> <a href="/">Tente novamente</a>')

                } else { //Caso não haja erro, redirecionar para home "/"

                    res.writeHead(302, {Location: '/'})
                    res.end()

                }
            })

        }

})

server.listen(port, ()=> console.log(`Servidor Online na porta ${port}.`))