
const EventEmitter = require('node:events')

// Criamos um emissor de eventos
const meuEmissor = new EventEmitter()

// Registramos uma função para ouvir o evento
meuEmissor.on('usuarioCadastrado', (nome) => {
    console.log(`Parabéns ${nome}, você foi cadastrado!`)
})

// Emitimos o evento
meuEmissor.emit('usuarioCadastrado', 'Daniel Alves')
