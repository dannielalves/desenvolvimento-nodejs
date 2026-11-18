const express = require('express')
const path = require('path')
const port = 3090

const basepath = path.join(__dirname, 'templates')

const app = express()

const checkAutenticacao = (req, res, next) => {
    req.autenticado = false

    if(req.autenticado){
        console.log('Autenticado, pode continuar')
        next()
    } else {
        console.log('Não autenticado, faça login')
        res.redirect('/login')
    }
}

//Rota login, sem proteção de autenticação
app.get('/login', (req, res)=> {
    res.sendFile(path.join(basepath, 'login.html'))
})

//Middware de autenticação
app.use(checkAutenticacao)

//Rotas Protegidas
app.get('/',(req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))
})
app.get('/empresa',(req, res)=> {
    res.sendFile(path.join(basepath, 'empresa.html'))
})
app.get('/produtos',(req, res)=> {
    res.sendFile(path.join(basepath, 'produtos.html'))
})
app.get('/contato',(req, res)=> {
    res.sendFile(path.join(basepath, 'contato.html'))
})

app.listen(port, ()=> console.log(`Servidor Oline na porta ${port}`))