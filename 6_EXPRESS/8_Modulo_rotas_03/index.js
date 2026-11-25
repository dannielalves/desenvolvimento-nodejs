const express = require('express')
const path = require('path')
const port = 3044
const basepath = path.join(__dirname, 'templates')

const app = express()

app.get('/', (req, res) => {
    res.end('Online')
})

app.listen(port, ()=> console.log(`Aplicação online na porta ${port}`))