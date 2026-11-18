const express = require('express')
const path = require('path')
const port = 3060

const basePath = path.join(__dirname, 'templates')

const app = express()

//Rotas
app.get('/', (req, res)=> {
    res.sendFile(path.join(basePath, 'index.html'))
})
app.get('/contato', (req, res)=> {
    res.sendFile(path.join(basePath, 'contato.html'))
})
app.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basePath, 'empresa.html'))
})
app.get('/produtos', (req, res)=> {
    res.sendFile(path.join(basePath, 'produtos.html'))
})

app.listen(port, ()=> console.log(`Servidor online na porta ${port}`))