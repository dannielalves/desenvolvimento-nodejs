const express = require('express')
const path = require('path')
const port = 3015
const basepath = path.join(__dirname, 'templates')
const app = express()
const rotas = require('./rotas')


app.use('/', rotas)

app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))
})

//Middleware para exibir pagina 404
app.use((req, res)=>{
    res.status(404).sendFile(path.join(basepath, '404.html'))
})

app.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))