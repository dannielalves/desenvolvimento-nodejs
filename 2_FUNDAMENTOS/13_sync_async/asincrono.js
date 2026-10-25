const fs = require('fs')

console.log('Início')

fs.writeFile('outro_arquivo.txt', 'Esse é outro arquivo!', (err) => {
    setTimeout(()=> {
        console.log('Arquivo criado com sucesso!')
    }, 4000)
})

console.log('Fim')