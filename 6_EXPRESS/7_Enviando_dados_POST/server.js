const express = require('express')
const path = require('path')
const port = 3030
const basepath = path.join(__dirname, 'templates')
const app = express()

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/users/create', (req, res) => {
    res.status(200).sendFile(path.join(basepath, 'userform.html'))
})

app.post('/users/save', (req, res) => {
    res.status(200).sendFile(path.join(basepath, 'success.html'))
    console.log(req.body)
    const {name: nome, job: profissão} = req.body
    console.log(`Usuário: ${nome} | Profissão: ${profissão}`)
})

app.get('/', (req, res)=> {
    res.status(200).sendFile(path.join(basepath, 'index.html'))
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(basepath, '404.html'))
})

app.listen(port, ()=> console.log(`Aplicação rodando na porta ${port}`))