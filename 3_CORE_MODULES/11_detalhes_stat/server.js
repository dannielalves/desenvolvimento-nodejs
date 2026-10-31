const fs = require('fs')


fs.stat('pasta', (err, stats)=> {
    if(err){
        console.log(err)
        return
    }


})