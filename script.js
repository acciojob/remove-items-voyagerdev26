//your JS code here. If required.
let select=document.body.querySelector("#colorSelect");
select.addEventListener("change",optionVal);
let option;
function optionVal(e){
	option=this.options[this.selectedIndex];
}

let input=document.body.querySelector("input");
input.addEventListener("click",removeOpt);
function removeOpt(e){
	option.remove();
}