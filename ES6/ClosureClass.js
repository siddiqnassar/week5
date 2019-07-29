var Dish =function(){
var id=0;
var name='';
var price=0;
var obj = {
	setId:function(argId){
     id=argId;
},
getId:function(){
return id;
},
setName:function(argName){
name=argName;
},
getName:function(){
return name;
},
getDesc:function(){
	//return 'id '+id+' name '+name;
	return `id : ${id} `;
}
}
return obj;
}
var result=Dish();
result.setId(23);

console.log(result.getId())