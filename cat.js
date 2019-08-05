module.exports = function (){
    const fs = require('fs');
    process.stdout.write(fs.readFile("bash.js",'utf8',(err,data)=>{ 
    if(err){
        throw err;
    }
    else{
        process.stdout.write('\nprompt >');
    }
}));
}