var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // since this is a query selector, must use the . 
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//key: inputs will have this event you can listen to called "input"

function setGradient() {
	body.style.background="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
