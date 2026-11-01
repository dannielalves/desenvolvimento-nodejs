 const path = require('path')

 const customPath = '/relatorios/empresa/relatorio1.pdf'

 console.log(`Nome do diretório [dirname]: ${path.dirname(customPath)}`)
 console.log(`Nome do arquivo [basename]: ${path.basename(customPath)}`)
 console.log(`Extensão do arquivo [extname]: ${path.extname(customPath)}`)