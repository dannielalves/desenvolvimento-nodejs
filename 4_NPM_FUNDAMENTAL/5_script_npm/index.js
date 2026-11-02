const http = require('http')
const url = require('url')
const path = require('path')
const port = 3012

const server = http.createServer((req, res)=>{
    const urlInfo = new url.URL(req.url, 'http://localhost')
    let file = path.join('public', path.sep, urlInfo.pathname.substring(1))
})