// let a=require('node:buffer');
// b=a.alloc(10)
// console.log(b)
// const { Buffer } = require('node:buffer');

// Creates a zero-filled Buffer of length 10.
// const buf1 = Buffer.alloc(10);
// console.log(buf1)
// let {Buffer}=require('node:buffer');
// a=Buffer.alloc(29,3)
// console.log(a)
let {Buffer}=require('node:buffer');
a=Buffer.alloc(10);
console.log(a)
a.fill(3);
console.log(a)
b=Buffer.concat([a,a],20);
console.log(b)
console.log(Buffer.isBuffer(b))
console.log(Buffer.isBuffer('he'))
// console.log(Buffer.equal([a,b]))
// c=a.keys();
// console.log(c.next().value)
// for(i in c){
//     console.log(i)
// }
// console.log(b.lastIndexOf(2))
console.log(a.length)

// import {Buffer} from ('node:buffer');
console.log(Buffer.alloc(10,'hello').fill(3,3))
console.log(a.swap16())
console.log(Buffer.isBuffer(a))
console.log(Buffer.isBuffer('hello'))