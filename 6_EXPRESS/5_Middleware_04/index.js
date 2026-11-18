const express = require('express')
const path = require('path')
const port = 3095
const app = express()

const basepath = path.join(__dirname, 'templates')
//Middleware
const checkAuth = (req, res, next) => {
    req.autenticacao = true
    if(req.autenticacao){
        console.log(`Usuário autenticado`)
        next()
    } else {
        console.log(`Faça login para continuar`)
        res.redirect('/login')
    }
}


//Rota do Login não deve ter proteção
app.get('/login', (req, res)=> {
    res.sendFile(path.join(basepath, 'login.html'))
})

//Usando o Middware de autenticação
app.use(checkAuth)

//Rotas protegidas
app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))
})
app.get('/produtos', (req, res)=> {
    res.sendFile(path.join(basepath, 'produtos.html'))
})
app.get('/contato', (req, res)=> {
    res.sendFile(path.join(basepath, 'contato.html'))
})
app.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basepath, 'empresa.html'))
})

app.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))