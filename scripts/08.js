
/*
Topic #08 Triggering CSS3 with (Vanilla) JavaScript 
*/
	//Visibility Transitions code
	// shows an element
	var show = function (elem) {
		// gets the element height 
		var getHeight = function () {
			elem.style.display = 'block'; // make it visible
			var height = elem.scrollHeight + 'px'; //get element height
			elem.style.display = ''; //  hide it again
			return height;
		};
		// original height
		var height = getHeight();
		// make it visible
		elem.classList.add('is-visible'); 
		// set the max-height
		window.setTimeout(function () {
		elem.style.height = height; 
			elem.style.height = '';
		}, 1200);
	};
	// hides an element
	var hide = function (elem) {
		// changes the element height
		elem.style.height = elem.scrollHeight + 'px';
		// sets height back to 0
		window.setTimeout(function () {
			elem.style.height = '0';
		}, 1);
		// hide the element when transition completes
		window.setTimeout(function () {
			elem.classList.remove('is-visible');
		}, 1200);
	};
	// toggle element visibility
	var toggle = function (elem, timing) {
		// if element is visible then hide it
		if (elem.classList.contains('is-visible')) {
			hide(elem);
			return;
		}
		// else show it
		show(elem);
	};
	// listen for click events
	document.addEventListener('click', function (event) {
		// make sure the clicked element is our target toggle
		if (!event.target.classList.contains('visible')) return;
		// prevents default link behavior
		event.preventDefault();
		// get the content
		var content = document.querySelector(event.target.hash);
		if (!content) return;
		// Toggle the content
		toggle(content);
	}, false);

	//Animated Size & Color Transitions code
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


