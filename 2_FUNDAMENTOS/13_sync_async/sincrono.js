const fs = require('fs')

console.log('Início')

fs.writeFileSync('exemplo.txt', 'Esse arquivo foi criado agora')

console.log('Arquivo criado com sucesso')
console.log('Fim')