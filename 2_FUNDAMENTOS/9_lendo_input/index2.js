
process.stdout.write('Qual seu nome? ')

process.stdin.on('data', (dados) =>{
    const nome = dados.toString().trim();

    process.stdout.write(`Olá, ${nome}!\n`)

    process.stdin.pause()
})