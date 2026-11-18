const express = require('express')
const path = require('path')
const app = express()

const port = 3000

const basepath = path.join(__dirname, 'templates')


app.get('/', (req, res) => {
    res.sendFile(path.join(basepath, 'index.html'))
})


app.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basepath, 'empresa.html'))
    // res.end()

})
app.get('/contato', (req, res)=> {
    res.sendFile(path.join(basepath, 'contato.html'))
    // res.end()

})



app.listen(port, ()=> console.log(`App online na porta ${port}`))
