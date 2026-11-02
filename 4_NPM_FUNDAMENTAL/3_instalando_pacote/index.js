const _ = require('lodash')

//Exemplo 1 — Remover elementos duplicados Sem lodash
const numeros = [1,4,2,3,4,5,6,4,6,9,2,7,1,0,2,3,8,9,0]
const resultado = [...new Set(numeros)]

console.log(`1-Resultado sem repetição: ${resultado}`)

//Com lodash
const resultado2 = _.uniq(numeros)

console.log(`2-Resultado sem repetição: ${resultado2}`)

//Exemplo 2 — Ordenar uma lista de objetos usando lodash
const clientes = [
    {nome: 'Daniel', idade: 40},
    {nome: 'Romário', idade: 36},
    {nome: 'Francisco', idade: 34},
    {nome: 'João', idade: 63}
]

const ordenarCliente = _.orderBy(clientes, ['idade'], ['asc']) //Ordenar pela idade na ordem crescente 'ascendente'
console.log('Clientes: ', ordenarCliente)