const os = require('os')

console.log(`Nome da máquina: ${os.hostname()}`)
console.log(`Quantas CPU's tem o Servidor: ${os.cpus().length}`)
console.log("Tabela de CPU's")
console.table(os.cpus())
console.log(`Quanto de memória livre: ${(os.freemem()/(Math.pow(1024,3))).toFixed(2)} GB`)
console.log(`Quanto de memória livre: ${(os.freemem()/(1024 ** 3)).toFixed(2)} GB`) //Outra forma
console.log(`Tipo de sistema: ${os.type()}`)
console.log(`Tempo ligado em horas: ${(os.uptime()/3600).toFixed(2)} horas ligado`)
console.log(`Tempo ligado em minutos: ${(os.uptime()/60).toFixed(2)} minutos ligado`)

const tempoLigadoSegundos = os.uptime()
//Calcular horas
const horas = Math.floor(tempoLigadoSegundos/3600)
const minutos = Math.floor((tempoLigadoSegundos%3600)/60)
const segundos = Math.floor(tempoLigadoSegundos % 60)

console.log(`Tempo ligado >> ${horas}h ${minutos}m ${segundos}s`)