const express = require('express')
const port = 3010
const app = express()

app.get('/',(req, res)=> {
    res.send('SERVIDOR ONLINE')
    res.end()
})


app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))
