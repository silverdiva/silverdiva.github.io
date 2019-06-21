/*
Topic #08 Triggering CSS3 with (Vanilla) JavaScript 
*/
//Visibility Transitions code
// makes an element visible
var show = function (element) {
	// gets the element height 
	var getHeight = function () {
		element.style.display = 'block';
		var height = element.scrollHeight + 'px';
		element.style.display = '';
		return height;
	};
	// makes height "invisible" or hides the element, sets max height
	var height = getHeight();
	element.classList.add('is-visible');
	element.style.height = height;
	window.setTimeout(function () {
		element.style.height = '';
	}, 1200); //sets the speed of the transition
};
// makes element invisible
var hide = function (element) {
	// changes the element height back to 0
	element.style.height = element.scrollHeight + 'px';
	// Set the height back to 0
	window.setTimeout(function () {
		element.style.height = '0';
	}, 1);
	// hide the element when transition completes
	window.setTimeout(function () {
		element.classList.remove('is-visible');
	}, 1200);
};
// Toggle visibility / invisibility of the element
var magic = function (elem, timing) {
	// If visible - hide it
	if (element.classList.contains('is-visible')) {
		hide(element);
		return;
	}
	// else show it
	show(element);
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
// triggered by the makeSmaller() function when clicking the "return text to normal" button
document.getElementById("change").style.color = "red"; //text changes to red
document.body.style.backgroundColor = "lightblue"; //background color changes from yellow to lt blue

//adds the RATE (i.e. 2s) of the div and background color change
function makeSmaller() {
	document.getElementById("change").style.WebkitTransition = "all 2s";
	document.getElementById("change").style.transition = "color 2s, background-color 5s, font-size 10s";
	document.body.style.transition = "background-color 2s";
	document.getElementById("change").style.fontSize = "20%"; //makes text shrink
	document.body.style.backgroundColor = "yellow"; //makes background color yellow
}
//changes background color from yellow (make text smaller button) to a lightblue (return text to normal size) button
function makeNormal() {
	document.getElementById("change").style.WebkitTransition = "all 2s";
	document.getElementById("change").style.transition = "color 2s, background-color 2s, font-size 10s";
	document.body.style.transition = "background-color 2s";

	document.getElementById("change").style.color = "red"; //makes text color red
	document.getElementById("change").style.backgroundColor = "lightBlue";
	document.getElementById("change").style.fontSize = "100%"; //return text size back to normal
	document.body.style.backgroundColor = "lightblue";
}
//END Topic #08 Triggering CSS3 with (Vanilla) JavaScript
