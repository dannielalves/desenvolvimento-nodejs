const express = require('express')
const router = express.Router()
const path = require('path')

const basepath = path.join(__dirname, '../templates')


router.get('/produtos', (req, res)=> {
    res.sendFile(path.join(basepath, 'produtos.html'))
})
router.get('/empresa', (req, res)=> {
    res.sendFile(path.join(basepath, 'empresa.html'))
})

module.exports = router