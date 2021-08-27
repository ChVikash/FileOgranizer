let path = require("path");
let fs =  require("fs");


let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
let arr = ["media" , "archives" , "documents" , "app" , "others"];


let dirpath = path.join(process.cwd() ,"RandomFolder");

function o(input){
    for(let i = 0 ; i < arr.length ; ++i){
        let p = path.join(dirpath , arr[i]);
        if(fs.existsSync(p) == false){
            fs.mkdirSync(p);
        }
    }
    files = fs.readdirSync(input);
    for(let i = 0 ; i < files.length ; ++i){
        let fileordirpath = path.join(input , files[i] ) ;
        let stats = fs.lstatSync(fileordirpath); 
        if(stats.isFile() == true){
            let flag = 0 ;
            let ext = path.extname(fileordirpath);
            //console.log(ext);
            for(let i = 0 ; i < arr.length -1 ; ++i){
                let key = arr[i];
                //console.log(types[key]);
                if(types[key].includes(ext.slice(1))){
                    flag = 1 ;
                    let filename = path.basename(fileordirpath);
                    let destpath = path.join(dirpath , key ,filename);
                    console.log("copying " , filename ," to " ,key);
                    fs.copyFileSync(fileordirpath , destpath);
                    //fs.unlinkSync(fileordirpath); to delete source file after copy 
                    console.log("copied" , filename);
                    break ;
                }
            }
            if(flag == 0){
                let filename = path.basename(fileordirpath);
                let destpath = path.join(dirpath , "others" ,filename);
                fs.copyFileSync(fileordirpath , destpath);
            }
        }
    }
}
module.exports = {
    o:o
}
