
//externo
    const minimist = require('minimist')
    
    
    //interno
    
    const soma = require('./soma').soma

    
const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])

const b = parseInt(args['b'])

const resultado = soma(a,b)

console.log(`A soma de ${a}+${b}=${resultado}`)
