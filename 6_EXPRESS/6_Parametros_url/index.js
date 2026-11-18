const express = require('express')
const path = require('path')
const port = 3085

const app = express()
const basepath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //Aqui seria a leitura da tabela user no db, e resgate do usuário que tem id informado na url
    console.log(`Estamos buscando o usuário cujo id=${id}`)
    res.sendFile(path.join(basepath, 'users.html'))
})

app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))
})

app.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))