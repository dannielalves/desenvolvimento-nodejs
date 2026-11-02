const _ = require('lodash')

const produtos = [
    {nome: 'Ventilador', preco: 119.90},
    {nome: 'Televisão', preco: 1299.90},
    {nome: 'Fogão', preco: 999.90},
    {nome: 'Armário', preco: 1599.90}
]

//Usando o lodash para somar os preços e mostrar o total 
const total = _.sumBy(produtos, 'preco')

const real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})
const dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

const euro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
} )

console.log(`Total: ${real.format(total)}`)
console.log(`Total: ${dollar.format(total)}`)
console.log(`Total: ${euro.format(total)}`)