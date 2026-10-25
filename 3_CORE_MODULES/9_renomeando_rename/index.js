const fs = require('fs')

const name = 'arquivo.txt'
const new_name = 'novo_nome.txt'

if(fs.existsSync(name)) {
            fs.rename(name,new_name, (err) =>{
            
            if(err){
                console.log(err)
                return
            } else {
                console.log(`O arquivo ${name} foi renomeado para ${new_name}.`)
                return
            }
        })
    
} else if(fs.existsSync(new_name)) {

    fs.rename(new_name,name, (err) =>{
    
    if(err){
        console.log(err)
        return
    } else {
        console.log(`O arquivo ${new_name} foi renomeado para ${name}.`)
        return
    }
})
} else {
    console.log(`Não foi encontrado nenhum dos arquivos.`)
}
