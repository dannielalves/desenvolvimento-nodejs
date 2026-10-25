function a() {
    console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
}

function c() {
    console.log('Executando c()')
    a()
    b()
}


c()

//Event Loop garante que a execução do código seja sequencial