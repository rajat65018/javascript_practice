// const a=require('fs');
// a.writeFileSync('read.txt','hello world')
// let fs = require('fs');
// fs.open('photo.txt','r',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// let a=require('fs');
// a.open('read.text','r',(err,fd)=>{
//     if(err){
//         console.log('something wrong happend');
//     }
//     else{
//         console.log('file opened successfully');
//     }
// })
// let a=require('fs');
// a.appendFile('read.txt1','hello how are you',(err,fd)=>{
    // if(err){
    //     console.log('an error has occured')
    // }
    // else{
    //     console.log('file executed successfully');
    // }
//     console.log(fd)
// })

// let a=require('fs');
// a.open('read.txt','r',(err,fd)=>{
//     if(err){
//         console.log('an error has occured in read1.txt');
//     }
//     else{
//         a.appendFile('read.txt1','hip hip hurrah',(err,fd)=>{
//             if(err){
//                 console.log('cannot append to file');
//             }
//             else{
//                 console.log('can append to file');
//             }
//         })
//     }
// })

// let a=require('fs');
// a.readFile('sum.js',(err,fd)=>{
//     if(err){
//         console.log('cannot read the file');
//     }
//     else{
//         console.log('file opened successfully');
//     }
// })

// let a=require('fs');
// a.copyFile('read.txt','read1.txt',(err,fd)=>{
//     if(err){
//         console.log('cannot copy');
//     }
//     else
//     {
//         console.log('can copy');
//     }
// })
// let a=require('fs');
// b=a.readFile('read.txt',(err,data)=>{
//     if(err){
//         console.log('an error has occured');
//     }
//     else{
//         console.log('success')
//     }
// })
// console.log(b)

// let a=require('fs');
// a.rename('./read1.txt','./read5.txt',(err,data)=>{
//     if(err){
//         // console.log('an error has occured');
//         console.log(err)
//     }
//     else{
//         console.log('successful')
//     }
// })
// let a=require('fs');
// a.truncate('read2.txt',3,(err)=>{
//     if(err){
//         console.log('cannot truncate a file')
//     }
//     else{
//         console.log('file truncated')
//     }
// })
// let a=require('fs');
// a.writeFile('read3.txt','hello how are you',(err)=>{
//     if(err){
//         console.log('cannot write to file');
//     }
//     else{
//         console.log('written to file successfully')
//     }
// })
// a.appendFile('read3.txt','hip hip hurrah',(err)=>{
//     if(err){
//         console.log('data cannot be added to file successfully');
//     }
//     else{
//         console.log('data appended to file successfully')
//     }
// })
// a.readFile('./read3.txt',(err,fd)=>{
//     if(err) console.log('cannot read the file');
//     else console.log(fd.toString())
// })
// a.readFile('read3.txt',(err,fd)=>{
//     console.log(fd.toString())
// })
// console.log(a.readFileSync('read2.txt', {
//     encoding: "utf-8"
// }))

// let a=require('fs');
// data='hello how are you';
// a.writeFile('read.txt',data,(err,data)=>{
//     if(err){
//         console.log('cannot append to file successfully');
//     }
//     else{
//         console.log('appended to file successfully');
//     }
// })

// let a=require('fs')
// a.unlink('read.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file executed successfully')
//     }
// })

// let a=require('fs')
//  a.copyFile('read2.txt','read6.txt',(err,data)=>{
//     if(err){
//         console.log('cannot copy the file');
//     }
//     else{
//         console.log('file copied successfully')
//     }
// })

// let a=require('fs');
// a.writeFile('read2.txt','javascipt',(err)=>{
//     if(err){
//         console.log('cannot write to file');
//     }
//     else{
//         console.log('file written successfully');
//     }
// })
// let a=require('fs');
// a.existsSync
// console.log(b)

// let a=require('fs');
// console.log(a.readFile("./a.txt", {
//     encoding: "utf-8",
// }, (err) => {
//     console.log(err)
// }))
// try {
//     a.readFile('read2.txt');
//     throw 'hello';
//     undefined.all()
// }
// catch(err){
//     console.log('hello');
// }
// let a=require('fs');
// let b=a.open('read2.txt','r',(err)=>{
//     if(err){
//         console.log('cannot open the file')
//     }
//     else{
//         console.log('file opened successfully')
//     }
// })
// a.appendFile(b,'hello hwo are you',(err)=>{
//     if(err){
//         console.log('unsuccessful');
//     }
//     else{
//         console.log('successful');
//     }
// })
// let a=require('fs');
// data='data to be written in a file';
// a.writeFile('testwrite.txt',data,(err)=>{
//     if(err){
//         console.log('error has occured');
//     }
//     else{
//         console.log('file created successfully');
//     }
// })
// a.readFile('testwrite.txt',(err,data)=>{
//     if(err){
//         console.log('an error has occured');
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// let a=require('fs');
// a.open('read33.txt','r',(err,data)=>{
//     if(err){
//         console.log('unable to open file successfully');
//     }
//     else{
//         console.log('file opened successfully');
//         console.log(data.toString());
//     }
// })
// console.log(b);
// b.readFile('')
// let a=require('fs');
// a.readFile('function.js',(err,data)=>{
//     if(err){
//         console.log('cannot open the file');
//     }
//     else{
//         console.log(JSON.stringify(data), typeof data);
//         console.log(JSON.parse(data))
//     }
    
// })
