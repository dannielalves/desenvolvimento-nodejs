//mais de um valor

const x = 10
const y = "Daniel Alves"
const z = [1,2]

console.log(x, y, z)

//contagem de impressões

console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variável entre string

console.log('Meu nome é %s, e sou programador há %s anos.', y, x)

//aviso sobre ação

setTimeout(() => {
    console.log("O console será limpado")
}, 2000);

//limpar console

setTimeout(() => {
    console.clear()
}, 3000);