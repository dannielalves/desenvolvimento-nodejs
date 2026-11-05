//Módulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//Módulos internos
const fs = require('fs')
console.log('#### INICIAMOS O ACCOUNTS ####')

operations()

function operations () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar conta','Consultar Saldo','Depositar','Sacar','Sair'],
        },
    ]).then().catch((err)=> console.log(err))
}


