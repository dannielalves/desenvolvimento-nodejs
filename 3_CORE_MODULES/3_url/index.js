const url = require('url')

const address = 'http://www.interativasistemas.com.br/catalogo?produtos=cadeira'

const parsedUrl = new url.URL(address)


console.log(`Protocol: ${parsedUrl.protocol}`)
console.log(`Host: ${parsedUrl.host}`)
console.log(`Pathname: ${parsedUrl.pathname}`)
console.log(`Search: ${parsedUrl.search}`)
console.log(`SearchParams: ${parsedUrl.searchParams}`)
console.log(`SearchParams: ${parsedUrl.searchParams.get('produtos')}`)