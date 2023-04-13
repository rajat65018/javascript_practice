// console.log(abc().next());
// function* abc(){
//     yield 1;
// }
// function abc(xyz){
//     console.log(xyz());
// }
// function xyz(){
//     console.log('hello world');
// }
// abc(xyz);
// function bark() {
//     console.log('Woof!');
//     console.log(animal);
// }
// bark.animal = 'dog';
// bark()
// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();
// function abc(){
//     def();
//     console.log('outer function');
//     def();
//     function def()
//     {
//         console.log('inner function');
//     }
//     def();
// }
// abc();
// function abc(){
//     a=new Promise((res,rej)=>{
//         res('a has become a promise');
//     })
//     return a;
// }
// a=abc();
// console.log(a);
// function abc(a,b,c){
//     console.log(a,b,c);
// }
// num=[1,2,3];
// abc(...num);
// function abc(...a)
// {
//     console.log(a);
// }
// abc(1,2,3,4,5);
// async function abc(){
//     console.log('hello world');
// }
// abc();
// function* abc(){
//     i=0
//     yield i+1;
//     yield i+2;
//     yield i+3;
// }
// let a=abc();
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a.next().value);
// console.log(a);
// function abc(a,b,c){
//     console.log(a,b,c)
// }
// abc(...[1,2,3,4,5]);
// function abc(){
//     const a=10;
//     return function(){
//         if(a>5){
//             console.log('a is greater than five');
//         }
//         else{
//             console.log('a is less than five');
//         }
//     }
// }
// x=abc();
// x();

// const { default: test } = require("node:test");

// (function abc(){
//     def();
//     console.log('abc called');
//     function def(){
//         console.log('def called');
//     } def();
// })();

// async function abc(){
//     return 3
// }
// // console.log(abc())
// abc().then((val)=>{
//     console.log(val);
// })

// const test = {
//     then: function() {
//         console.log("test");
//     }
// }

// test.abc()

// async function abc() {
//     console.log("1");

//     setTimeout(() => {
//         console.log(6);
//     }, 1000);

//     console.log(7);

//     const test = await new Promise((res) => {
//         console.log(4);
//         setTimeout(() => {
//             console.log(5)
//             res(3);
//         }, 1000)
//     })
//     console.log(test)
// }

// abc();
// console.log("2");


// async function abc(){
//     console.log('hello');
//     await 
//     console.log('world');
//     console.log('how are you');
//     console.log('pratham singh')
// }
// abc();
// console.log('waiting for execution')

// async function test() {
//     try {
//         console.log(await Promise.reject(5).then((res) => {}, (res) => {
//             // return 8
//             console.log(res)
//         }))
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// test();

// process.nextTick(() => {
//     console.log(1);
// })

// setTimeout(() => {
//     console.log(2);
// }, 1000)

// setImmediate(() => {
//     console.log(1);
// })

// async function abc(){
//     console.log('hello');
// }
// a=abc();
// console.log(a);
// async function abc(){
//     return new Promise((res,rej)=>{
//         res('hello')
//     });
//     // return 'hello'
// }
// a=abc();
// console.log(a)

// async function test(inp) {
//     const a = await new Promise((res) => {
//         setTimeout(() => {
//             res(inp)
//         }, inp * 1000);
//     });
//     return a;
// }

// const tester = [test(1), test(2)];

// Promise.all(tester).then((res) => {
//     console.log(res);
// })

// tester[0].then((inp) => {
//     console.log(`a ${inp}`);
// })

// tester[1].then((inp) => {
//     console.log(`b ${inp}`);
// })

// tester[2] = Promise.resolve(5);

// console.log(NaN ?? 2)
// let a=[1,2,3,4,5];
// a={
//     b:2,
//     c:{
//         d:5
//     }
// }
//  b={...a}
//  b.c.d = 8;
// console.log(a.c.d, b.c.d)
// async function abc(){
//     return 3;
// }
// // console.log(abc())
// b=abc();
// console.log(b);
// async function abc(){
//     await console.log('hello world');
//     console.log('how are you');
//     console.log('who are you');
// }

// abc();
// console.log('rajat')

// async function abc(){
//     let a=await new Promise((res,rej)=>{

//         res(3);
//         console.log('who are you')
//         res(6);
//     })
//     console.log(a);
//     // console.log('who are you');
// }

// abc();
// console.log('ooooo');
function abc(){
    return new Promise((res,rej)=>{
        res('promise has been resolved');
    })
}
console.log(abc())
