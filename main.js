let help = require("./commands/help");
let tree= require("./commands/tree");
let organize = require("./commands/organize");

let input  = process.argv.slice(2);

let command = input[0];

switch(command){
    case "organize" :
        organize.o(input[1]);
        break;
    case "tree":
        tree.treefn(input[1])
        break ;
    case "help" :
        help.helpfn(); 
        break ;
}