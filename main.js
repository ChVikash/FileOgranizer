let help = require("./commands/help");
let tree= require("./commands/tree");
let organize = require("./commands/organize");

let input  = process.argv.slice(2);

let command = input[0];
if(command == "help"){
    help.helpfn();
}else if(command = "tree"){
    tree.p(input[1]);
}else if(command == "organize"){
    organize.o(input[1]);
}