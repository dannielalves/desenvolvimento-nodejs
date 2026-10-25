const http = require('http')
const url = require('url')
const port = 80
const server = http.createServer((req, res) => {

    // const urlInfo = url.parse(req.url, true)
    const adress = new url.URL(req.url, 'http://localhost') //http://localhost é usado apenas como base, não influencia
    // const adress = new URL(req.url, `http://${req.headers.host}`) //Caso queira usar o proprio endereço da requisição

    const name = adress.searchParams.get('name')

    res.writeHead(200, {'Content-type':'text/html; charset=utf-8'})

    if(!name) {
        res.end(`<h1>Preencha seu nome:</h1>
        <form methtod='get'>
            <input type='text' name='name'>
            <input type='submit' value='Enviar'>
        </form>`)
    } else {
        res.end(`<h1>Seja bem-vindo ${name}</h1>`)
    }

})

server.listen(port, () => console.log(`Servidor Online na porta ${port}`))