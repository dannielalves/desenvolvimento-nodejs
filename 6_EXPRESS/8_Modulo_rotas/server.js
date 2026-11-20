const express = require('express')
const path = require('path')
const port = 3025
const basepath = path.join(__dirname, 'templates')

const rotas = require('./rotas')

const app = express()

app.use(express.urlencoded({
    extended: true }))

app.use(
    express.json()
)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', rotas)

app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))
})

// Rota para páginas não encontradas (deve ser colocada logo após a  última rota)
app.use((req, res) => {
    res.status(404).sendFile(path.join(basepath, '404.html'))
})

app.listen(port, ()=> console.log(`Aplicativo online na porta ${port}`))