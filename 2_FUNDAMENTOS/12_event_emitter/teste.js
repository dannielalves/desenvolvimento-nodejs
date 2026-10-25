const EventEmitter = require('node:events')

const emissor = new EventEmitter()

emissor.on('teste', () => {
    console.log('A')
})

console.log('B')

emissor.emit('teste')

console.log('C')

//B A C