const express = require('express')
const path = require('path')
const app = express()

const port = 3000



app.get('/', (req, res)=> {

}).listen(port, ()=> console.log(`App online na porta ${port}`))
