var dish = {
	id: 23,
	name: 'Paanipuri',
	price: 40,

	getPrice: function () {

		return this.price;
	},
	geName: function () {

		return this.name;
	}
}
var arr=[];
arr[0] = 'TCS';
arr[1] = 'Bangalore';
var fun=function(array) {
console.log(this.firstname+" works for "+array[0]+" location at "+array[1]);
}
//this is default behaviour
//var fun = function(companyName) {
//console.log(this.firstname +" Works for "+companyName);
//}
//console.log(dish.getPrice());
//fun();

var obj={
firstname : 'shounak',
secondname : 'kulkarni'
}
//fun.call({firstname:'Shaik',secondname:'Fauzia'});
var rebindFun = fun.bind(obj,arr);
rebindFun();

var applyFun=function(param1,param2,param3){
console.log(param1+' '+param2+' '+param3);
}
applyFun.apply({},['one', 'two', 'three']);