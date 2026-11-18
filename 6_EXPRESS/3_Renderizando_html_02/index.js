const express = require('express')
const path = require('path')
const port = 3050

const app = express()

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res)=> {
    res.sendFile(path.join(basePath, 'index.html'))
})
app.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basePath, 'empresa.html'))
})
app.get('/contato', (req, res)=> {
    res.sendFile(path.join(basePath, 'contato.html'))
})

app.listen(port, ()=> console.log(`App online na porta ${port}`))