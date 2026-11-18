const express = require('express')
const path = require('path')
const port = 3065
const basepath = path.join(__dirname, 'templates')

const app = express()
const usuario = "daniel"
const senha = 1234
let autenticado = false

//Início Middleware para ler o body da resposta
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json()
)
// Fim Middleware para ler o body da resposta

//Middleware de verificar autenticação
const checkAutenticacao = (req, res, next) => {
        if(autenticado){
            next()
        } else {
            res.sendFile(path.join(basepath, 'err.html'))
        }
}

app.get('/login', (req, res)=> {
    res.sendFile(path.join(basepath, 'login.html'))
})

app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))
})



app.post('/painel', (req, res)=> {
    const user = req.body.user
    const pass = req.body.pass
    console.log(`Usuario: ${user} - Senha:${pass}`)
    if(user == usuario && pass == senha){
        autenticado = true
        res.sendFile(path.join(basepath, 'painel.html'))
    } else {
        res.sendFile(path.join(basepath, 'err.html'))
    }  
})

app.get('/logoff', (req, res)=> {
   autenticado = false
   res.sendFile(path.join(basepath, 'index.html'))
})

app.use(checkAutenticacao)
//Rota protegida
app.get('/painel', (req, res)=> {
    res.sendFile(path.join(basepath, 'painel.html'))
})



app.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))