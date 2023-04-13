// a=[1,2,3,4,5];
// x=[];
// a.at(1);
// console.log(a.at(1));
// console.log(a.concat(a));
// console.log();
// i=0;
// console.log(a.map(num=>{if(num%2==0){x[i]=num;i++}}));
// console.log(a.map(num=>{if(num%2==0){console.log('even')}else{console.log('odd')}}));
// a=[1,2,3,4,5];
// b=a.every(element=>element%2==0);
// console.log(b);
// b=a.every(element=>{if(element>3)console.log('')});
// console.log(b);
// a=[1,2,3,4];
// x=a.length;
// a.reduce((acc,current)=>{
//     a[x]=current;;
//     x++;
// },0)
// console.log(a)

// a=[1,2,3,4,5];

// a.map(double);
// function double(element ,index, arr){
//   //c=arr.length;

//   arr[arr.length]=arr[index];   
// }
// console.log(a);

// a=[1,2,3,4];
// a.map(double,1);
// function double(){
//     console.log(this)
// }

// a = [1,2,3,4,5];
// x = []

// console.log(a.map((inp, index) => {
//     x[index] = inp;
// }))

// console.log(x)

// const arr = [1,2,3,4]

// const test = arr.keys()

// console.log(test)
// a=[1,2,3,4];
// function def(a,b,c,d){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// def(...a);
// a={
//     a:1,b:2
// };
// function def(obj)
// {
    
// }
// a=[1,2,3,4,5];
// console.log(a[0]);
// console.log(a.at(1));
// console.log(a.concat(a));
// console.log(a.join(':'));
// console.log(a.toString());
// obj=new Object(a);
// console.log(obj);
// a.map(function(element, index,arr){
//     console.log(element);
//     console.log(index);
//     console.log(arr);
// })
// console.log(1,2,3,4);
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }
// a=[1,2,3,4];
// b=a.find(x=>x>3)
// console.log(b);
// b=a.filter(double);
// function double(element){
//     if(element>3)
//     console.log(element);
// }
// a=[11,3,6,4];
// console.log(a.sort());
// // console.log(a.sort(a,b)=>{a-b})
// a.splice(2,1,55)
// console.log(a);
// b=a.entries();
// console.log(a.sort((a,b)=>a-b));
// b=a.values();
// console.log(b.next().value);
// c=a.entries();
// console.log(c.next())
// d=a.keys()
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// a=[1,2,3,4];
// b=a.entries();
// console.log(b.next().value);
// console.log(b.next().value);
// console.log(b.next().value);
// console.log(b.next().value)
// console.log(b.next().value);
// console.log(Object.fromEntries([[1,2],[5,3]]));
// console.log(Object.fromEntries([]))
// a=[1,2,3,5,4];
// // a.length=2;
// // console.log(a);
// Object.seal(a);
// try{a.push(1);}
// catch{
//     console.log('cannot add properties in array');
// }
// console.log(a);
// console.log(Object.isSealed(a));
// let obj={a:1,b:2,c:3};
// const obj1=Object.create(obj);
// let obj2 = {};
// Object.setPrototypeOf(obj2,obj1);
// console.log(obj.isPrototypeOf(obj2))
// console.log(obj);
// a=[1,2,3,4];
// a.reduce((acc=1,curr,index,arr)=>{
//     console.log(acc,curr,index,arr);
// },0)
// b=[];
// a=[{name:'a',class:1},{name:'b',class:2},{name:'c',class:1}];
// a.filter((element,index)=>{
//     if(a[index].class==1){
//         b[index]=a[index].name;
//     }
// })
// console.log(b);
// b=[];
// a=[{name:'a',class:1},{name:'b',class:2},{name:'c',class:1}];
// a=[1,2,3,4];
// a.map((element,index)=>{
//     if(a[index].class==1)
//     b[index]=a[index].name;
// })
// console.log(b);
// c=0;
// a.filter((element,index)=>{
//     if(a[index].class==1)
//     {b[++c]=a[index].name;
//     }
// })
// console.log(b);
// ar=[1,2,3,4,5];
// br=[];
// ar.map((element,index)=>{
//     br[index]=element;
// });
// console.log(br);
// for(let i=0;i<ar.length;i++){
//     br[i]=ar[i];
// }
// console.log(br)
// for(let i=0;i<ar.length;i++)
// {
//     ar.pop();
    // console.log()
// }
// console.log(ar);
// console.log(Array.isArray(ar));
// console.log(Array.isArray({a:'hello',b:''}));
// ar=['a','b','c','d'];
// c=0;
// b=ar.find((element,index)=>{
//     if(ar.includes('d')){
//         if(element==="d"){
//             c++
//             return index;
//         }
//         c++;
//     }
// })
// console.log(c)
// console.log(ar.find((element,index)=>{
// element==='d'
// }))
// a=['a','b','c','d']
// console.log(a.find((element,index)=>{
//     element==='b'
// }))
// console.log(a.find(element=>element=='d'))
ar=['milk','bread','sugar'];
// function abc(ar){
//     if(ar.includes('milk'))
//     return true;
//     else
//     return false;
// }
// c=abc(ar)
// console.log(c)
// ar.find()
// function abc(ar){
//     if(ar.includes('milk'))
//     {
//        var x=ar.indexOf('milk')
//     }
//     console.log(x)
//     for(i=x;i<ar.length;i++)
//     {
//         ar[i]=a[i+1];
//     }
// }
// delete ar[ar.length-1];
// console.log(ar);
ar=['milk','bread','sugar'];
// function abc(ar){
//     if(ar.includes('milk'))
//     console.log('milk found');
//     else
//     console.log('milk not found');
// }
// function abc(ar){
//     if(ar.includes('milk'))
//     {
//         console.log('milk found');
        
// }
// var x=ar.indexOf('milk');
// console.log(x);
//     // else
//     // console.log('milk not found');
//     for(let i=x;i<ar.length;i++)
//     {
//         ar[i]=ar[i+1];
//     }
//     delete ar[ar.length];
//     ar=ar.length-1;
// }
// abc(ar);
// console.log(ar)
// delete ar[0];
// console.log(ar);

// ar=['a','b','c','d'];
// x=ar.findIndex((element,index)=>{
//     if(element==='d'){
//         console.log('item found');
//         return index;
//     }
// })
// console.log(x)
// ar=[,,,,];
// console.log(ar.length);
// x=console.log(1);
// console.log(x)
// ar=[1,2,3,4,5];
// console.log(ar.reduce((acc,curr)=>
//     acc+curr
// ))
// console.log(a);

// var animals = [
//     { name: "Jason", species:"rabbit"},
//     { name: "Jessica", species:"dog"},
//     { name: "Jacky", species:"owl"},
//     { name: "Luke", species:"fish"},
//     { name: "Junior", species:"rat"},
//     { name: "Thomas", species:"cat"}
// ]
// animals.filter(({name,species})=>{
//     if(species==='dog'){
//         console.log(name);
//     }
// })
// console.log(animals.map(({name,species})=>{
//     // return species;
//     console.log(species)
// }))
// a=new Array(1,2,3,4,5);
// console.log(a)
// a.splice(0,a.length);
// console.log(a)
// console.log(Array.isArray(a))
// delete a[2];
// console.log(a);
let a=[1,3,3];
a[-1]=10;
console.log(a);
console.log(a.length)