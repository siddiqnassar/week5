let timeOut =(time=2000, message="No input from user")=> {
	setTimeout((message) =>{
	 console.log(`${message} after ${time} seconds`);
},time*1000,message)
}
let handle;
let interval =(time=2000, message="No input from user")=> {
	handle= setInterval((message) =>{
	 console.log(`${message} after ${time} seconds`);
},time*1000,message)
}
//timeOut(5,"hey");
interval(1,"every second")
console.log("This will be printed before timeout is completed");
setTimeout(()=>{
console.log('lets terminate the interval .. ')
clearInterval(handle)},5000)