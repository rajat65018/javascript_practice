let a=require('http');
const fs = require("fs")
a.createServer((req,res)=>{
    if(req.url==='/contact'){
        res.end(fs.readFileSync("./test.html", {
            encoding: "utf-8"
        }));
    }
    else{
        res.end('error 404 page does not exist');
    }
}).listen(9000,()=>{
    console.log('running');
})