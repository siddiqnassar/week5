class Employee{
 constructor(_firstName,_lastName,_age,_salary){
this._firstName=_firstName;
this._lastName=_lastName;
this._age=_age;
this._salary=_salary;
}

 set firstName(fname){
this._firstName=fname;
}

 set last(lname){
this._lastName=lname;
}

 set age(_age){
this._age=_age;
}
set salary(_salary){
this._salary=_salary;
}
 get firstName(){
return this._firstName;
}

 get lastName(){
return this._lastName;
}

 get age(){
return this._age;
}
get salary(){
return this._salary;
}
}
class regularEmployee extends Employee{

constructor(firstName, lastName, age, salary, vacationDays) {
	super(firstName, lastName, age, salary);
this.vacationDays=vacationDays;
}
set vacation(vacationDays) {
this.vacationDays=vacationDays;
}
get vacation() {
return this.vacationDays;
}
}
let emp=new Employee('siddiq','nassar',21,50000);
console.log(emp.firstName);
emp.firstName= 'rayapati';
console.log(emp);
let regEmp=new regularEmployee();
console.log(regEmp);