const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')
const port = 3031
const app = express()

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=> {

    const user = {
        name: 'Daniel',
        surname: 'Alves'
    }

    const auth = false

    const itens = ['Daniel', 'Romário', 'Rian', 'Myrla']

    const post = {
        title: 'Usando handlebars',
        category: 'Javascript',
        body: 'Essa template engine é muito completa e não leva complexidade para as views',
        author: 'Daniel Alves de Araujo - Programador Fullstack'
    }

    res.render('home', {layout: 'main', user : user, auth, itens, post}) //{layout: 'main'} pode se omitido nesse caso
})

app.listen(port, ()=> console.log(`Aplicação online na porta ${port}`))