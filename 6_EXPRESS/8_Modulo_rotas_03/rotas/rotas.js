const express = require('express')
const path = require('path')
const basepath = path.join(__dirname, '../templates')

const router = express.Router()

router.get('/livros', (req, res)=> {
    res.sendFile(path.join(basepath, 'livros.html'))
})



module.exports = router