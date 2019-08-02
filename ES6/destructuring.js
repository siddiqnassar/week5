let players=['Virat','Rohit','Shounak','Raina','Dhawan'];
//array destucturing
const [captain,vCaptain] = players;

console.log(`Captain : ${captain}, ViceCaptain ${vCaptain}`);

let batsman='siddiq';
let runner='Nassar';
[batsman,runner]=[runner,batsman];

console.log(`After the run batsman is ${batsman} and runner is ${runner}`);

//object destructuring

let player ={

name :'Virat kohli',
centuries : 28,
halfcenturies : 60,
matches : 350
}
player ={

	name :'chris gayle',
centuries : 15,
	halfcenturies : 50,
	matches : 200,
    playfor :'westindies'
}
/*const {name,centuries,matches,playfor='India' }=player
console.log(`name is ${name} and matches is ${matches} and country is ${playfor}`)
*/
let item={
	name :'Iphone',
    price:10800
}
let currencyCalculator = function({price:amount}){
return {
    'INR' : amount,
     'USD' : amount/68,
     'EURO' : amount/80
}
}

const {USD:amountInDollars} = currencyCalculator(item);
console.log(`Amount in dollars ${amountInDollars}`)
