const express = require('express')
const path = require('path')
const port = 3030
const basepath = path.join(__dirname, 'templates')
const app = express()

const users = require('./users')

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', users)

app.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(basepath, 'index.html'))
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(basepath, '404.html'))
})

app.listen(port, ()=> console.log(`Aplicação rodando na porta ${port}`))