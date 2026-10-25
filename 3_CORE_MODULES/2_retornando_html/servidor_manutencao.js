
const http = require('http')

const port = 80

// Altere para true para ativar a manutenção
let emManutencao = false

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (emManutencao) {
        res.statusCode = 503
        res.end(`
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Em manutenção</title>
            </head>
            <body>
                <h1>Estamos em manutenção!</h1>
                <p>Voltaremos em breve. Agradecemos a compreensão.</p>
            </body>
            </html>
        `)
        return
    }

    res.statusCode = 200
    res.end('<h1>Olá, você está conectado!</h1>')
})

server.listen(port, () => {
    console.log(`Servidor online na porta ${port}`)
})
