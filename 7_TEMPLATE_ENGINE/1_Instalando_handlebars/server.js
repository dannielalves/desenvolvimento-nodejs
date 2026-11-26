const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')
const port = 3031

const app = express()

app.engine('handlebars', engine())

app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=> {
    res.render('home', {layout: false})
})

app.listen(port, ()=> console.log(`Aplicação online na porta ${port}`))