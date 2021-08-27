let fs = require('fs')
let path = require('path')

function treefn(input){
    if(fs.existsSync(input)){
        treeHelper(input , "");
    }else{
        console.log("Enter a valid path");
    }
}

function treeHelper(givenPath, indent){
    let stats = fs.lstatSync(givenPath);
    if(stats.isFile() == true){
        console.log( indent + "|--" , path.basename(givenPath) );
    }else{
        let dirandfilesArr = fs.readdirSync(givenPath);
        for(let i = 0 ; i < dirandfilesArr.length ; ++i ){
            //console.log(dirandfilesArr[i])
            let fileordirpath = path.join(givenPath , dirandfilesArr[i]);
            //console.log(fileordirpath)
            treeHelper(fileordirpath , indent + "\t");
        }
    }
}

module.exports = {
    treefn:treefn
}
