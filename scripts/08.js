/*
Topic #08 Triggering CSS3 with (Vanilla) JavaScript 
*/
//Visibility Transitions code
// makes an element visible
var show = function (elem) {

	// gets the element height 
	var getHeight = function () {
		elem.style.display = 'block'; 
		var height = elem.scrollHeight + 'px'; 
		elem.style.display = ''; 
		return height;
	};
// makes height "invisible" or hides the element, sets max height
	var height = getHeight(); 
	elem.classList.add('is-visible');
	elem.style.height = height; 
	window.setTimeout(function () {
		elem.style.height = '';
	}, 1200);//sets the speed of the transition

};

// makes element invisible
var hide = function (elem) {
	// changes the element height back to 0
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// hide the element when transition completes
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 1200);

};

// Toggle visibility / invisibility of the element
var magic = function (elem, timing) {

	// If visible - hide it
	if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}

	// else show it
	show(elem);
	
};

// add event listener 
document.addEventListener('click', function (event) {

	// if class = 'magic' then that's the one we want
	if (!event.target.classList.contains('magic')) return;
	event.preventDefault();

	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// show the magic (toggle between visible and invisible)
	magic(content);

}, false);


// */*/*/* Animated Size & Color Transitions code */*/*/* //
//changes the div colors
document.getElementById("div2").style.backgroundColor = "white";

document.getElementById("div1").style.color = "red";

//changes the background color
document.body.style.backgroundColor = "lightblue";

//adds the RATE (i.e. 2s) of the div and background color change
function myFunction() {
	document.getElementById("div1").style.WebkitTransition = "all 2s";
	document.getElementById("div1").style.transition = "color 2s, background-color 5s, font-size 10s";
	document.body.style.transition = "background-color 2s";

	document.getElementById("div1").style.color = "blue";
	document.getElementById("div1").style.backgroundColor = "white";
	document.getElementById("div1").style.fontSize = "20%";

	document.body.style.backgroundColor = "yellow";
}
//reverts back to the original color settings
function myReturnFunction() {
	document.getElementById("div1").style.WebkitTransition = "all 2s";
	document.getElementById("div1").style.transition = "color 2s, background-color 2s, font-size 10s";
	document.body.style.transition = "background-color 2s";

	document.getElementById("div1").style.color = "red";
	document.getElementById("div1").style.backgroundColor = "lightBlue";
	document.getElementById("div1").style.fontSize = "100%";

	document.body.style.backgroundColor = "lightblue";
}
//END Topic #08 Triggering CSS3 with (Vanilla) JavaScript
