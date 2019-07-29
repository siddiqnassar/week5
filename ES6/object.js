var dishes=[{
	id : 34,
'dish-name' : 'masala-dosa',
price : 45
},
{
id : 40,
'dish-name' : 'idli',
price : 20
}
]
let printDishName = function(allDishes) {
console.log('arguments');
console.log(arguments);
for(var index=0;index<allDishes.length;index++){
console.log(allDishes[index].price +" " +allDishes[index]['dish-name']);

}
}

printDishName(dishes);