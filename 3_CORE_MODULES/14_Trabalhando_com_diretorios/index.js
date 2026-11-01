const fs = require('fs')

if(!fs.existsSync('./minhaPasta')){ //Se a pasta não existir
    console.log('Não existe')

    fs.mkdir('./minhaPasta', (err) => {
        if(err){
            console.log('Erro ao criar a pasta: ', err)
            return
        }
        console.log('Pasta criada com sucesso!')
    })
    
} else { //Caso a pasta exista
    console.log('A pasta já existe')
}