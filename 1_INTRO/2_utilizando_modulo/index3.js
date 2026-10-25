const fs = require('fs')

fs.readFile('meu_documento.txt', 'utf-8', (err, data)=> {
    if(err){
        console.log('Erro ao ler o arquivo: '+err)
        return
    }

    console.log(data)
})