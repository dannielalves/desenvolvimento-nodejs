const fs = require('fs') 

fs.readFile('arquivo2.txt', 'utf-8', (err, data) =>{

    if(err){
        console.log(err)
        return
    }

    console.log("Conteúdo: "+data)

})

