const express = require('express')
const path = require('path')
const basepath = path.join(__dirname, '../templates')
const route = express.Router()


route.get('/create', (req, res) => {
    res.status(200).sendFile(path.join(basepath, 'userform.html'))
})

route.post('/save', (req, res) => {
    res.status(200).sendFile(path.join(basepath, 'success.html'))
    console.log(req.body)
    const {name: nome, job: profissão} = req.body
    console.log(`Usuário: ${nome} | Profissão: ${profissão}`)
})


module.exports = route
