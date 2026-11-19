const express = require('express')
const path = require('path')
const port = 3045

const app = express()

const basepath = path.join(__dirname, 'templates')

app.get('/painel', (req, res)=> {
    res.sendFile(path.join(basepath, 'painel.html'))

})
app.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basepath, 'empresa.html'))

})
app.get('/login', (req, res)=> {
    res.sendFile(path.join(basepath, 'login.html'))

})
app.get('/produtos', (req, res)=> {
    res.sendFile(path.join(basepath, 'produtos.html'))

})
app.get('/servicos', (req, res)=> {
    res.sendFile(path.join(basepath, 'servicos.html'))

})
app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))

})

app.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))