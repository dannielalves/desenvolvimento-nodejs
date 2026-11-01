const fs = require('fs')

if(!fs.existsSync('./minhaPasta')){
    console.log('Não existe')

    fs.mkdir('./minhaPasta', (err) => {
        if(err){
            console.log('Erro ao criar a pasta: ', err)
            return
        }
        console.log('Pasta criada com sucesso!')
    })
    
} else {
    console.log('A pasta já existe')
}