const http = require('http')

const opcoes = {
    hostname: 'localhost',
    port: 3011,
    path: '/..%2Fserver.js',
    method: 'GET'
}

const requisicao = http.request(opcoes, (res) => {

    console.log('Status HTTP:', res.statusCode)

    let dados = ''

    res.on('data', (parte) => {
        dados += parte
    })

    res.on('end', () => {
        console.log('Resposta do servidor:')
        console.log(dados)
    })

})

requisicao.end()