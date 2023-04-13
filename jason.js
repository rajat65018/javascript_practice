const obj={
    name:'rajat',
    rollno:33,
    contact:3333
};
console.log(obj.name);
const a=JSON.stringify(obj);
console.log(a)
console.log(obj.name);
console.log(JSON.parse(a))