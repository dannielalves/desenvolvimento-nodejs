const express = require('express')
const path = require('path')
const port = 3075

const basepath = path.join(__dirname, 'templates')

const app = express()

//Middleware para ler o body da resposta
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json()
)
 //

//Rotas
app.get('/users/add', (req, res)=> {
    res.sendFile(path.join(basepath, 'form.html'))
})

app.post('/users/save', (req, res)=> {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
    res.sendFile(path.join(basepath, 'sucesso.html'))
})


app.get('/', (req, res)=> {
    res.sendFile(path.join(basepath, 'index.html'))

})

app.listen(port, ()=> console.log(`Servidor Online na porta ${port}`))