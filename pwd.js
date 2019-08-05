module.exports = function (){
    //if (cmd === "pwd") {
        
    process.stdout.write(`${__dirname}`);
    process.stdout.write('\nprompt >');
    //} 
    // process.stdout.write('You typed ' + cmd);
    // process.stdout.write('\nprompt >');
}

