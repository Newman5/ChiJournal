var date = new Date();
var options = {
	timeZone: "America/Anchorage",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZoneName: "short",
};
var d = new Intl.DateTimeFormat("en-US", options).format(date);
d.toLocaleString();
//--------------------------------------------

// Time
const timeDiv = document.getElementById("timeDiv");
console.log(d);
/* timeDiv.innerHTML = `
   <p class="info"> The time in Anchorage is ${d}</p>
 `; */

//--------------------------------------------
//test	
//--------------------------------------------
const words = ["test","random","testing","cheers","Why"];
let randomWord;

function getRandomWord(){
	return words[Math.floor(Math.random()* words.length)]
}

console.log(getRandomWord())
