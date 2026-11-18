const express = require('express')
const path = require('path')
const port = 3070
const basepath = path.join(__dirname, 'templates')

const app = express()

//Middleware
const checkAuth = function (req, res, next){
    req.autorizado = false
    
    if(req.autorizado){
        next()
    } else {
        res.redirect('/login')
    }
}

//Rotas protegidas
        app.get('/',checkAuth, (req, res)=> {
            res.sendFile(path.join(basepath, 'index.html'))
        })
        app.get('/empresa',checkAuth, (req, res)=> {
            res.sendFile(path.join(basepath, 'empresa.html'))
        })
        app.get('/produtos',checkAuth, (req, res)=> {
            res.sendFile(path.join(basepath, 'produtos.html'))
        })
        app.get('/contato',checkAuth, (req, res)=> {
            res.sendFile(path.join(basepath, 'contato.html'))
        })
        app.get('/login', (req, res)=> {
            res.sendFile(path.join(basepath, 'login.html'))
        })


app.listen(port, ()=> console.log(`Servidor online na porta ${port}`) )