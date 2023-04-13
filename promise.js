// const a=new Promise(double);
// function double(){
//     console.log('hello world');
//     //resolve('success');
// }
// console.log(a);
// a.then((value)=>{
//     console.log(value)
// })
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });

// function fun(num)
// {

//     return a;
// }
// const ans=fun(6);
// ans.then(function(val)
// {
//     console.log("abcd",val);
// })
// a.then((val)=>{
//     console.log("absd",val)
// }).then((val)=>{
//     console.log("rejected",val)
// }).finally((val)=>{
//     console.log('hello world');
// })

// const a=new Promise((res,rej)=>{
//     res("a")})

//     const b=new Promise((res,rej)=>{
//         rej("b rejected")})

//         const c=new Promise((res,rej)=>{
//             rej("c resolved")})

// Promise.race([a,b,c]).then((val)=>{
//     console.log(val)
// }).then((val)=>{
//     console.log(val)
// })
// const b=new Promise((res,rej)=>{
//     res('b accepted');
// })
// const a=new Promise((res,rej)=>{
//     rej('a rejected');
// })
// Promise.all([b,a]).then((val)=>{
//     console.log(val);
// }).catch((val)=>{
//     console.log('a rejected');
// }).finally((val)=>{
//     console.log('program ended');
// })
// c=new Promise((res,rej)=>{
//     rej("c's rejected")
// });
// Promise.any([c,a]).then((val)=>{
//     console.log(val);
// }).catch((val)=>{
//     console.log('hello world');
// }).finally((val)=>{
//     console.log('finally executed');
// });
// a=new Promise((res,rej)=>{
//     res('a called');
// })
// Promise.any([a]).then((x)=>{
//     console.log((x));
// })
// try{b=new Promise((res,rej)=>{
//     rej('b failed');
// })
// throw 'b failed';
// }
// catch(e){
//     console.log(e);
// }
// finally{
//     console.log('finally executed');
// }
// b=new Promise((res,rej)=>{
//     rej('unsuccessful');
// })
// Promise.all([b]).then((x)=>{
//     console.log(x);
// }).catch((x)=>{
//     console.log(x);
// }).finally((x)=>{
//     console.log('finally successful');
// })
// Promise.race([b,a]).then((x)=>{
//     console.log(x)
// }).catch((x)=>{
//     console.log(x)
// }).finally((x)=>{
//     b=new Promise((x)=>{
//         console.log('b called');
//     })
// })

// a=new Promise((res,rej)=>{
//     // res('successful');
//     rej('unsuccessful')
// });
// // console.log(a);
// Promise.all([a]).then((val)=>{
//     console.log(val)
// }).then((val)=>{
//     console.log(val);
// }).catch((val)=>{
//     console.log(val);
// }).finally((val)=>{
//     // console.log('we are inside final block');
//     console.log(val);
// })
// a = [
//   new Promise((res, rej) => {
//     setTimeout(function () {
//       res("0 index");
//     }, 2000);
//   }),
//   new Promise((res, rej) => {
//     setTimeout(function () {
//       rej("1st index");
//     }, 1000);
//   }),
// ];
// const b = Promise.all(a).then((val) => {
//   console.log(val);
//   return 2;
// }).then((val) => {
//     console.log(val);
//     return 3;
//   }).catch((val) => {
//     console.log(val);
//     return 4;
//   })

// b.then((res)=> {
//     console.log(res)
// })

// function abc(){
//     return new Promise((res,rej)=>{
//         res('executed');
//     })

// }
// console.log(abc())

// function abc(){
//     let a = new Promise((res,rej)=>{
//         res('executed');
    // })

    // console.log(a)

// }
// console.log(abc())
let a=new Promise((res,rej)=>{
    res(5)
});
console.log(a);
let b=new Promise((res,rej)=>{
    rej('sorry')
})
// console.log(b)