//your JS code here. If required.
// let select=document.querySelector("#colorSelect");
// select.addEventListener("change",optionVal);
// let option;
// function optionVal(e){
// 	option=this.options[this.selectedIndex];
// }

// let input=document.querySelector("input");
// input.addEventListener("click",removeOpt);
// function removeOpt(e){
// 	option.remove();
// }

// 2nd way
let input= document.querySelector("input");
let selector= document.getElementById("colorSelect");
// let options=document.querySelectorAll("option");

input.addEventListener("click",(e)=>{
	let val=selector.value;
	let option=document.querySelector(`[value=${val}]`);
	// console.log(option);
	option.remove();

	
})