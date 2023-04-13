// function def(a,b,c){
//     console.log('hello world');
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// //def.call();
// def.call(0,2,3,4);
// a={
//     'name':'rajat',
//     rollno:6262
// }
// function def(b,c){
//     this.name=b;
//     this.rollno=c;
//     console.log(this.name);
//     console.log(this.rollno);
// }
// def.call(a,'hello',3);
// a={
//     name:'rajat',
//     rollno:626
// }
// function def()
// {
//     console.log(this.name);
//     console.log(this.rollno);
// }
// def.call(a);
// b={
//     name:'pk',
//     rollno:32
// }
// def.call(b);
//  const   obj={
//     name:'rajat',
//     rollno:44
//  }

//  const obj1 = {
//     name: "rajan",
//     fn: function() {
//         console.log(this.name)
//     }
//  }

//  obj1.fn.call(obj);

 function abc(){
    var a=10;
    console.log(this);
    return  function() {
       console.log(this);
        console.log(a);
    }
 }
//  x=abc();

Array.prototype.tester = abc;
([1,2,3,4].tester())()
//  const test = x.bind(1);
//  test()

//  function abc(obj, a,b)
//  {
//     obj.name=a;
//     obj.rollno=b
//     console.log(obj.name);
//     console.log(obj.rollno);
//  }

