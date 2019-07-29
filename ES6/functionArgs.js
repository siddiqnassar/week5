let sum=(a,b)=> a+b;
let sub = (a, b) => a-b;
let product = (a, b) => a*b;
let calculate =(a,b,fun) => fun(a,b);

var concat =(a,b) =>a+b;
console.log(calculate(10,5,sum));
console.log(calculate("hello","world",function(a,b){
return a+b;
}));
console.log(calculate("hello","world",concat));

