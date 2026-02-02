//your JS code here. If required.
let select=document.querySelector("#colorSelect");
select.addEventListener("change",optionVal);
let option;
function optionVal(e){
	option=this.options[this.selectedIndex];
}

let input=document.querySelector("input");
input.addEventListener("click",removeOpt);
function removeOpt(e){
	option.remove();
}