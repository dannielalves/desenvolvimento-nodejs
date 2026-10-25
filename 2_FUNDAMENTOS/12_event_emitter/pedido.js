const EventEmitter = require('node:events')

const emissor = new EventEmitter()

emissor.on('pedido', (cliente) => {
    console.log(`Estamos registrando seu pedido, ${cliente}.`)
})


emissor.on('pedido', () => {
    console.log('Atualizando estoque')
} )

emissor.on('pedido', () => {
    console.log('Notificando o setor de vendas')
})


emissor.emit('pedido', 'Daniel Alves')
