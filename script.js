//your JS code here. If required.
const inputText=document.getElementById("text");
const inputDelay=document.getElementById("delay");
const btn=document.getElementById("btn");
const output=document.getElementById("output");

function delay(ms){
	return new Promise((reslove)=> setTimeout(resolve,ms));
}
btn.addEventListener("click",async function(){
	const text=inputText.value;
	const time=Number(inputDelay.value);
	await delay(time);
	output.textContent=text;
});