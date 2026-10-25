


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguarem preferida? ', (language) => {
    console.log(`Então sua linguagem preferida é ${language}!`)
    readline.close()
})
