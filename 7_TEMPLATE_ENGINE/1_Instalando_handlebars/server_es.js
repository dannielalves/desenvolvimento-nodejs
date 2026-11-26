import express  from 'express';
import path from 'path';
const port = 3031
import {engine} from 'express-handlebars'

const app = express()

app.get('/', (req, res)=> {
    res.end('Oi')
})

app.listen(port, ()=> console.log(`Aplicação online na porta ${port}`))