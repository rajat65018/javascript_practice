// /*let arr=[{name:'pk',class:1},{name:'A',class:2}];
// let ans=arr.find(val=>val.class==1)
// console.log(ans.name)
// */
// obj={};
// obj1={a:1,b:2,c:3};
// a=Object.assign(obj,obj1);
// //console.log(a);
// /*if(a===obj1){
//     console.log('equal');
// }
// else{
//     console.log('not equal');
// };*/
// b=Object.create(obj);
// console.log(b);
// obj={a:1,b:2};
// Object.defineProperties(obj,
//     {
//         a:{value:2,
            
//         enumerable:true},
//         b:{value:4,enumerable:false}
//     })
//     console.log(Object.values(obj));

// obj={a:1,b:2,c:3,abc:function(){console.log('hello world')}};
// m=Object.create(obj);
// m.abc();
// obj1={a:1,b:2,c:3};
// Object.setPrototypeOf(m,obj1);
// m.abc();
// target={};
// source={a:1,b:2,c:3,d:4};
// a=Object.assign(target,source);
// console.log(a);
// console.log(target);
// m=Object.create(target);
// m.name='rajat';
// console.log(m);
// console.log(target.name);
// console.log(m.a);
// console.log(Object.getOwnPropertyDescriptors(target));
// console.log(Object.getOwnPropertyDescriptor(target,'a'));
// console.log(Object.getOwnPropertyNames(target));
// console.log(Object.getOwnPropertySymbols(target));
// console.log(Object.hasOwn(target,'a'));
// console.log(Object.freeze(target));
// console.log(Object.preventExtensions(target));
// console.log(Object.seal(target));
// console.log(Object.isFrozen(target));
//  console.log(Object.isSealed(target));
// console.log(Object.isExtensible(target));
// console.log(Object.keys(target));
// console.log(Object.values(target))
// obj={a:1,b:3,c:4};
// set={};
// console.log(set.a);
// Object.setPrototypeOf(set,obj);
// console.log(set.a);
// console.log(Object.fromEntries([[1,2],[2,3]]));
// obj={a:1,b:2,c:3,d:4};
// Object.defineProperties(obj,{
//     a:{
//         value:3
//     }
// })
// console.log(obj.a);
// console.log(obj);
// a={a:1,b:{a:3}};
// console.log(a.b.a);
// obj={
//     a:1,b:2,c:3
// };
// Object.defineProperties(obj,{
//     a:{
//         value:33,
//         enumerable:false,
//         writable:false
//     }
// })
// console.log(obj.a)
// obj.a=55;
// console.log(obj.a);
// obj.propertyIsEnumerable('a');
// obj={a:1,b:2,c:3};
// obj1={};
// obj.prototype.a = obj1;
// console.log(obj.prototype.isPrototypeOf(obj1));
// Object.setPrototypeOf(obj1,obj);
// console.log(obj1.a);
// for(i in  obj){
//     console.log(i);
// }
// for([key ,value] in Object.entries(obj)){
//     console.log(key);
//     console.log(value);
// }
// a=Object.entries(obj);
// console.log(a.next())
// obj={a:1,b:2,c:3};
// obj1=obj
// console.log(obj1)
// delete obj.a;
// console.log(obj.a)

// let x = { foo : 1};
// var output = (function() {
//   delete x.foo;
//   return x.foo;
// })();
// console.log(obj.length);
a={};
b={};
console.log(a===b);
