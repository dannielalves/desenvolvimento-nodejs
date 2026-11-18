const express = require('express')
const path = require('path')
const port = 3070
const basepath = path.join(__dirname, 'templates')

const app = express()

//Middleware
const checkAuth = function (req, res, next){
    req.autorizado = true
    
    if(req.autorizado){
        next()
    } else {
        res.redirect('/login')
    }
}

//Rotas pública
        app.get('/login', (req, res)=> {
                    res.sendFile(path.join(basepath, 'login.html'))
                })
//Usando o Middleware
app.use(checkAuth)

//Rotas protegidas
        app.get('/', (req, res)=> {
            res.sendFile(path.join(basepath, 'index.html'))
        })
        app.get('/empresa', (req, res)=> {
            res.sendFile(path.join(basepath, 'empresa.html'))
        })
        app.get('/produtos', (req, res)=> {
            res.sendFile(path.join(basepath, 'produtos.html'))
        })
        app.get('/contato', (req, res)=> {
            res.sendFile(path.join(basepath, 'contato.html'))
        })
        


app.listen(port, ()=> console.log(`Servidor online na porta ${port}`) )