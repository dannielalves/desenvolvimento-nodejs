console.log('A')

async function executar() {
    console.log('B')
    await Promise.resolve()
    console.log('C')
}

executar()

console.log('D')

// A B D C
