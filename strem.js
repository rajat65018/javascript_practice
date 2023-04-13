// let a=require('fs');
// let b=a.createReadStream('read2.txt');
// b.on('data',(chunck)=>{
//     console.log((chunck).toString())
// // })
// let a=require('node:fs');
// let b=a.createReadStream('read5.txt');
// b.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })
// let a=require('node:stream');
// let b=require('fs');
// const { fstat } = require('node:fs');
// let c=b.createReadStream('read6.txt')
// c.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

// let c=b.createWriteStream('read6.txt',)
// let a=require('fs')
// let b=require('node:stream')
// let c=a.createReadStream('read6.txt');
// c.on('data',(chunck)=>{
//     console.log(chunck.toString())
// })
// b.finished(c,(err)=>{
//     if(err){
//         console.log('an error has occured');
//     }
//     else{
//         console.log('successfully executed')
//     }
// })
// let a=require('fs');
// let b=a.createReadStream('read6.txt');
// let c=a.createWriteStream('read8.txt');
// b.pipe(c);
// console.log('executed')
// let a=require('fs');
let a=require('fs');
let b=a.createWriteStream('write.txt');
a.writeFile('write.txt','hello how are you',(err)=>{
    if(err){
        console.log('an error has occured');
    }
    else{
        console.log('successful')
    }
})
let c=a.createReadStream('write.txt');
c.on('data',(chunk)=>{
    console.log(chunk.toString());
})