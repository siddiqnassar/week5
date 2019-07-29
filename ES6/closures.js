let outerFunction = function (fname, lname) {
var firstname =fname;
var lastname=lname;
console.log('set the value of firstname and second name');

var innerFunction = function (message, firstname  , lastname) {
firstname=firstname;
lastname = lastname;
 console.log(message+' '+firstname+' '+lastname);
 }

 return innerFunction;
}

var result=outerFunction ('Siddiq','Nassar');
//result("Hello..!!")
result('hi','john','Doe')