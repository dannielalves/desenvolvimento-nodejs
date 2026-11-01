const fs = require('fs')


fs.stat('arquivo.txt', (err, stats)=> {
    if(err){
        console.log(err)
        return
    }

    const earquivo = ()=>{
        if(stats.isFile() === false){
            return 'Não'
        }
        return 'Sim'
    }
    const ediretorio = ()=>{
        if(stats.isDirectory() === false){
            return 'Não'
        }
        return 'Sim'
    }
    
    console.log('É um arquivo: ' + earquivo())
    console.log('É um diretório: ' + ediretorio())
    console.log('Criado em : ' + stats.ctime)

})