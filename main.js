#!/usr/bin/env node

let help = require("./commands/help");
let tree= require("./commands/tree");
let organize = require("./commands/organize");

let input  = process.argv.slice(2);

let command = input[0];

switch(command){
    case "organize" :
        if (input[1] == undefined){
            organize.o(process.cwd());
        }else{
            organize.o(input[1]);
        }
        break;
    case "tree":
        if (input[1] == undefined){
            tree.treefn(process.cwd());
        }else{
            tree.treefn(input[1]);
        }
        break ;
    case "help" :
        help.helpfn(); 
        break ;
}