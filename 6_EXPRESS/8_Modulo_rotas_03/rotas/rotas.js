const express = require('express')
const path = require('path')
const basepath = path.join(__dirname, '../templates')

const router = express.Router()

router.get('/livros', (req, res)=> {
    res.sendFile(path.join(basepath, 'livros.html'))
})

router.get('/sobre', (req,res)=> {
    res.sendFile(path.join(basepath, 'sobre.html'))
})

router.get('/admin/dashaboard', (req, res) => {
    res.sendFile(path.join(basepath, 'painel.html'))
})



module.exports = router