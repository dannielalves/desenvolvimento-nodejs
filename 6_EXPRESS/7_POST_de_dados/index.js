const express = require('express')
const path = require('path')
const port = 3075

const basepath = path.join(__dirname, 'templates')

const app = express()

app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))

})

app.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))