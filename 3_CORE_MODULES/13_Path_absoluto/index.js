const path = require('path')

//path absoluto

console.log(`Caminho absoluto de [arquivo.txt]>>> ${path.resolve('arquivo.txt')}`)

//Formar Path

const midFolder =  'documentos' //pasta intermediária
const folder = 'boletos'
const fileName = 'boleto1.pdf' //nome de um arquivo

const finalPath = path.join('/', midFolder, folder, fileName)

console.log(`Path formado >> ${finalPath}`)