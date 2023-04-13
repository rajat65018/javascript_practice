// const a=require('http')

// const server=a.createServer((req,res)=>{
//     res.end('hello world');
// })
// server.listen(8000,'127.0.0.1',()=>{console.log('lie')})
// const a=require('http');
// const b=require('fs');
// const c=a.createServer((req,res)=>{
//     console.log(req.headers.a)
//     res.end("SUCCESS")
    // res.end(b.readFile('read2.txt',(err)=>{
    //     if(err){
    //         console.log('an error has occured');
    //     }
    //     else{
    //         console.log('successful')
    //     }
    // }))
// })
// c.listen(8000,()=>{
//     console.log('param');
// })
// let a
// let a=require('http');
// let b=require('fs');
// a.createServer((req,res)=>{
//     b.readFile('read3.txt',(err, data)=>{
//         // throw "test"
//         if(err){
//             console.log('an error has occured');
//         }
//         else{
//             console.log(1);
//             res.write(data)
//             res.end("test");
//         }
//     })
//     console.log(2)
//     // res.end("ghsaxhg")
// }).listen(4700)
// console.log(3)
// let a=require('http');
// a.createServer((req,res)=>{
//     res.end('hello how are you');
// }).listen(1111);let a=require('http');
// let a=require('http')
// a.createServer((req,res)=>{
//     let data='';
//     a=req.write('hello how are you');
//     req.on('data',(chunk)=>{
//         data+=chunk.toString();
//     })
//     req.on('end',()=>{
//         console.log(data)
//         res.end('heoo')
//     })
//   }).listen('8000');
  

// let a=require('http');
// a.createServer((req,res)=>{
//     res.write('hello how are you');
//     res.end();
// }).listen(8000);
// let a=require('fs');
// a.readFile('read3.txt',(err,data)=>{
//     if(err){
//         console.log("an error has occured");
//     }
//     else{
//         console.log('successfully opened');
//         console.log(data.toString());
//     }
// })
// let a=require('http');
// let b=require('fs');
// a.createServer((req,res)=>{
    // console.log(b.readFileSync("./read3.txt", {
    //     encoding: "utf-8"
    // }))

//     b.readFile('read3.txt',(err,data)=>{
//         if(err){
//             console.log('cannot open the file successfully');
//         }
//         else{
//             console.log('file opened successfully');
//             console.log(data)

//             res.write(data.toString());
//             res.end(data.toString());
//         }
//     })
// }).listen(8000);


// let a=require('http');
// a.createServer((req,res)=>{
//     req.write('hello how are you',(chunk)=>{
//         console.log(chunk);
//     })
//     res.end('completed');

// }).listen(8800);
// let a=require('http');
// a.createServer((req,res)=>{
//     res.write('hello world');
//     // res.req
//     // res.sendDate
//     // res.removeHeader('res.sendDate')
//     console.log("gekk");
//     res.writeHead(400);
//     console.log("here");
//     res.end('how are you');
    
//     // console.log(res)
// }).listen(9000, () => {
//     console.log("running")
// });
// let a=require('http');
// a.createServer((req,res)=>{
//     res.write('hello');
//     // res.writeContinue()
//     res.end('ended');
//     console.log(res.writableEnded)
// }).listen(9000,()=>{
//     console.log('running');
// })
// let a=require('http');
// let b=require('fs');
// a.createServer((req,res)=>{
//     req.write('hello file write')
//     b.writeFile('write.txt', JSON.stringify(req),
//     (err)=>{
//         if(err){
//             console.log('file not written successfully');
//         }
//         else{
//             console.log('file written successfully');
//         }
//     })
//     res.end('closing')
// }).listen(8000);

// let a=require('http');
// a.createServer((req,res)=>{
    // let data = "";

    // req.on("data", (chunk) => {
    //     data += chunk.toString()
    // })

    // req.on("end", () => {
    //     console.log(data)
    // })
//     res.write('ooheooheooheooheooheooheooheooheooheooheooheooheoo')
//     res.end('gggg')
// }).listen(8000);
// const { equal } = require('assert');
// let a=require('http');
// a.createServer((req,res)=>{
//     if(req.method === "PATCH") {
//         res.write('hello how are you');
//     }
//     res.end('ending successfully');
// }).listen(12000,()=>{
//     console.log('running');
// });
const {sign,verify}=require('jsonwebtoken')
let a=require('http');
a.createServer((req,res)=>{
    data='hello world';
    if(req.method==='GET'){
        res.write('hello how are you');
    }
    res.write(data);
    res.end('successful');
}).listen(6000,()=>{
    console.log('running');
})
// const token=sign('hello ','1234');
// console.log(token)