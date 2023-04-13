// try{
//     console.log('we are inside try block');
//     console.log('hello world');
//     console.log('how are you');
//     a();
// }
// catch(e){
//     console.log('we are inside catch block');
//     console.log(e);
// }
// finally{
//     console.log('code executed successfully');
// }
// try{
//     throw "error occured";
// }
// catch
// {
//     console.log('we are inside catch block');
// }
// try {
//     a=3;
//     if(a%2!=0)
//     {
//         throw 'not a an even number';
//     }
//     else 
//     {
//         throw 'even number';
//     }
// }
// catch(e){
//     console.log(e);
// }
// finally {
//     console.log('code finished successfully');
// }
// try {
//     console.log('you are inside try block');
//     throw ('error occured');
// }
// catch(e){
//     console.log(e);
// }
// finally{
//     console.log('you are inside final block');
// }
// try{
//     console.log('we are inside try block');
//     function abc(){
//         console.log('abc called');
//         return 1;
//     }
//     // throw 'error occured';
//     throw abc;
// }
// catch(e){
//     console.log('we are inside catch block');
//     console.log(e());
// }
// finally{
//     console.log('we are inside final block');
// }
try {
    console.log('we are inside try block');
    throw "an error has occured";
}
// catch{
//     console.log('we are inside catch block');
// }

catch(e){
    console.log(e);
}
finally{
    console.log('we are finally inside final block');
}