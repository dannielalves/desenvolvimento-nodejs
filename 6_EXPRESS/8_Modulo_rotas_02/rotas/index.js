const express = require('express')
const path = require('path')
const basepath = path.join(__dirname, '../templates')
const router = express.Router()

router.get('/produtos', (req, res)=>{
    res.sendFile(path.join(basepath, 'produtos.html'))
})

router.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basepath, 'empresa.html'))
})

router.get('/contato', (req, res)=> {
    res.sendFile(path.join(basepath, 'contato.html'))
})

module.exports = router