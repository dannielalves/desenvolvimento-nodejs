const http = require('http')
const url = require('url')
const path = require('path')
const port = 3012

//Diretório dos arquivos públicos
const publicDir = path.join(__dirname, 'public')

const server = http.createServer((req, res)=>{
    const urlInfo = new url.URL(req.url, 'http://localhost')
    let file = decodeURIComponent(urlInfo.pathname.substring(1))
})