const express = require('express')
const path = require('path')
const port = 3080
const basepath = path.join(__dirname, 'templates')

const app = express()

//Middleware
const checarAutenticacao = (req, res, next) => {
    req.autenticacao = true //simulação de autenticar ou não autenticar 

    if(req.autenticacao){
        console.log("Está logado, pode continuar")
        next()
    } else {
        console.log("Não está logado, faça login")
        res.redirect('/login')
    }
}

//Rota do login sem proteção de autenticação
app.get('/login', (req, res)=> {
    res.sendFile(path.join(basepath, 'login.html'))
})

app.use(checarAutenticacao)

//Rotas Protegidas
app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))
})
app.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basepath, 'empresa.html'))
})
app.get('/contato', (req, res)=> {
    res.sendFile(path.join(basepath, 'contato.html'))
})
app.get('/produtos', (req, res)=> {
    res.sendFile(path.join(basepath, 'produtos.html'))
})



app.listen(port, ()=> console.log(`Servidor online na porta ${port}`))