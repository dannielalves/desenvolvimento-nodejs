const express = require('express') //Importar o Express para a variavel express
const app = express() //definir que a variável app execute o express()
port = 3030 //definir uma variável para a porta

app.get('/', (req, res)=> {
    res.send('Olá, mundo!')
    res.end()

})

app.listen(port, ()=> console.log(`App rodando na porta ${port}`))