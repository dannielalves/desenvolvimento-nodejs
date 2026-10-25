const fs = require('fs')

const name = "1_arquivo.txt"
const new_name = "2_arquivo.txt"
const conteudo = 'Conteúdo do arquivo'

fs.rename(name, new_name, (err) =>{

    if(err) {
        fs.rename(new_name, name, (err) => {
            if(err){
                console.log(`Erro ao renomear arquivo (Não existe)`)
                fs.writeFile(name, conteudo, (err, data) => {
                    if(err) {
                        console.log(`O arquino não pode ser criado.`)
                        return
                    }
                    console.log(`O arquivo não foi encontrado, porém foi criado agora.`)
                })
                return
            }
            console.log(`O arquivo ${new_name} foi renomeado para ${name} com sucesso!`)

        })

        return
    }

    console.log(`O arquivo ${name} foi renomeado para ${new_name} com sucesso!`)
})