var returnFunction = function(firstName,lastName){
 var greetFun = function(message){
  console.log(message+' '+firstName+' '+lastName);
 }
 return greetFun;
}

var result = returnFunction('nassar','siddiq');
result("Welcome!!")
result('Good afternoon')