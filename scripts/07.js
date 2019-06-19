/*
Topic #07  Manipulating CSS Class Properties Using vanilla JavaScript
*/

//ONMOUSEOVER: change the border styling with onmouseover 
function borderChange() {
	document.getElementById("kim-and-girls").style.border = "20px solid red";
}
//ONMOUSEOUT: revert the border styling back to original with onmouseout 
function borderChangeAgain() {
	document.getElementById("kim-and-girls").style.border = "none";
	document.getElementById("kim-and-girls").style.borderRadius = "10px";
	document.getElementById("kim-and-girls").style.width = "50%";
}


//ONCLICK: onlick changes image height to 75% of original size
function doubleHeight() {
	document.getElementById("kim-and-girls").style.width = "75%";
}
//ONCLICK: onlick changes the image border radius
function changeRadius() {
	document.getElementById("kim-and-girls").style.borderRadius = "75px";
}
//ONCLICK: onlick reverts image height back to original size and border radius
function returnToNormal() {
	document.getElementById("kim-and-girls").style.width = "60%";
	document.getElementById("kim-and-girls").style.borderRadius = "30px";
}
//ONCLICK: onclick changes the text color of ALL the buttons
function changeColor() {
	var color = prompt("To change the text color on the buttons, just pick a color - ANY color!");
	var buttons = document.getElementsByClassName('myButtons');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.color = color;
	}
}




