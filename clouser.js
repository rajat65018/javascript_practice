// function x(){
//     x=10;
//     function y(){
//         console.log(x);
//     }
//     y();
// }
// x();
// function x()
// {
//     x=10;
//     function y()
//     {
//         console.log(x);
//     }
//     return y;
// }
// a=x();
// console.log(a);
// a();


function def(){
    let a=19;
    function abc()
    {
        console.log(a);
    }
    return abc;
}
let a=def();
a();
console.log('hello')
