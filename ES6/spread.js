let vegDishes=['dosa','idli','pulav'];
let nonVeg=['chicken-biryani','eggrice'];

const dishes=[...vegDishes,'upma','ragi',...nonVeg];
dishes.forEach(dish=>console.log(`${dish}`));

let item={
name :'Iphone',
price : 15000,
details:{
os:'IOS'
}
}
const props = {...item};
//console.log(props);

//rest Operator
let players=['Virat','Rohit','Shounak','Raina','Dhawan'];

const [captain,vCaptain,...team] = players;
let player ={

name :'Virat kohli',
centuries : 28,
halfcenturies : 60,
matches : 350
}

const{name:playerName,centuries,matches,...properties} = player;
console.log(properties)