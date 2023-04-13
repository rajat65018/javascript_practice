// const a = [1,1,2,3,4,5,11,231,,,2,null]
// console.log(a.sort((x,index)=>{
     
// }))
// console.log(Number.parseFloat('2'))
// console.log(Number.parseInt(''));
// function abc(s){
//     let res = 0;
//     if(typeof s=='number'){
//      return s;
//     }
//     s=s.trim();

//     if(! ['0','1','2','3','4','5','6','7','8','9'].includes(s[0])){
//         return NaN;
//     }
//     for(let i=0;i<s.length;i++){
//         if(['0','1','2','3','4','5','6','7','8','9'].includes(s[i])){
//            res = res * 10 + Number(s[i])
//         }
//         else if(s[i]) {
             
//              break;
//         }
//     }
//     return res;
// }
// console.log(Number.MIN_VALUE);
// const test = "9999999999999999999999999999999999999999999999999999999999"
// console.log(abc(test));
// console.log(parseFloat(test));


// function test() {
//     // "use strict"
//     this[5] = "5"
//     return this
// }

// console.log(test.call("hasdhkask"))

// const arr = [1,2,3,4]

// const test = arr.keys()

// console.log(test)

// const a = {
//     b: {
//         c: {
//             d: 4
//         },
//     }
// }

// console.log(a.b.c.d)
// console.log(a.d?.e)
// console.log(a.d.e)
// class C {
//     #x;
//     static isC(obj) {
//       try {
//         obj.#x;
//         return true;
//       } catch {
//         return false;
//       }
//     }
//   }
// let a=require('http');
// a.createServer((req,res)=>{
//   res.write('hello world');
//   res.end();
// }).listen(9000, () => {
//   console.log("Running")
// })

let a=require('http');
a.createServer((req,res)=>{
  res.write('hello how are you');
  res.end();
}).listen('1000');
