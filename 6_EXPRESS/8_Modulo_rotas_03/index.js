const express = require('express')
const path = require('path')
const port = 3044
const basepath = path.join(__dirname, 'templates')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(basepath, 'index.html'))
})

app.use((req, res, next)=> {
    res.status(404).sendFile(path.join(basepath, '404.html'))
})

app.listen(port, ()=> console.log(`Aplicação online na porta ${port}`))