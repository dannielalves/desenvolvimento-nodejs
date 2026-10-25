const { default: inquirer } = require("inquirer")


inquirer.prompt([
    {name: 'p1', message: 'Qual a primeira nota?'},
    {name: 'p2', message: 'Qual a segunda nota?'}
]).then((answers) => {
    const media = (parseFloat(answers.p1) + parseFloat(answers.p2))/2
    if (answers.p1.trim() !== '' && answers.p2.trim() !== ''){
        console.log(`Média: ${media}`)

    } else {
        console.log('Impossível calcular a Média')
    }
}
).catch(err => console.log(err))

