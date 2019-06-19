// /*/*/* CIT 261 CODE FLUENCY */*/*/ //

/*
Topic #02 Javacript Objects
*/
	//this will create new object that will become our movie-goer
	class Name {
		constructor(firstName, lastName) {
			this._firstName = firstName;
			this._lastName = lastName;
		}
	}
	//this method returns the movie-goer's first+last name
	name.prototype.createNewName = function () {
		this.newName = `${this._firstName} ${this._lastName}`;
		return this._newName;
	};

	//this displays the movie-goer's first+last name
	name.prototype.welcomeMessage = function () {
		const newName = this.createNewName();
		const welcome_Message = `Thank you ${newName}, please select your movie genres!`;
		return welcome_Message;
	};
	//END Topic #02 Javacript Objects


/*
Topic #07  Manipulating CSS Class Properties Using vanilla JavaScript
*/
	//change the border styling with onmouseover
	function borderChange() {
		document.getElementById("kim-and-girls").style.border = "20px solid red";
	}
	//revert the border styling back to original with onmouseout 
	function borderChangeAgain() {
		document.getElementById("kim-and-girls").style.border = "none";
		document.getElementById("kim-and-girls").style.borderRadius = "10px";
		document.getElementById("kim-and-girls").style.width = "50%";
	}
	//onlick changes image height to 75% of original size
	function doubleHeight() {
		document.getElementById("kim-and-girls").style.width = "75%";
	}
	//onlick changes the image border radius
	function changeRadius() {
		document.getElementById("kim-and-girls").style.borderRadius = "75px";
	}
	//onlick reverts image height back to original size and border radius
	function returnToNormal() {
		document.getElementById("kim-and-girls").style.width = "60%";
		document.getElementById("kim-and-girls").style.borderRadius = "30px";
	}
	//onclick changes the text color of ALL the buttons
	function changeColor() {
		var color = prompt("To change the text color on the buttons, just pick a color - ANY color!");
		var buttons = document.getElementsByClassName('myButtons');

		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.color = color;
		}
	}
	//end Topic #07 Manipulating CSS Class Properties Using vanilla JavaScript



/*
Topic #08-11-12-13 Triggering CSS3 with (Vanilla) JavaScript 
*/
	//Visibility Transitions code
	// Show an element
	var show = function (elem) {
		// Get the natural height of the element
		var getHeight = function () {
			elem.style.display = 'block'; // Make it visible
			var height = elem.scrollHeight + 'px'; // Get it's height
			elem.style.display = ''; //  Hide it again
			return height;
		};
		var height = getHeight(); // Get the natural height
		elem.classList.add('is-visible'); // Make the element visible
		elem.style.height = height; // Update the max-height
		// Once the transition is complete, remove the inline max-height so the content can scale responsively
		window.setTimeout(function () {
			elem.style.height = '';
		}, 1200);
	};
	// Hide an element
	var hide = function (elem) {
		// Give the element a height to change from
		elem.style.height = elem.scrollHeight + 'px';
		// Set the height back to 0
		window.setTimeout(function () {
			elem.style.height = '0';
		}, 1);
		// When the transition is complete, hide it
		window.setTimeout(function () {
			elem.classList.remove('is-visible');
		}, 1200);
	};
	// Toggle element visibility
	var toggle = function (elem, timing) {
		// If the element is visible, hide it
		if (elem.classList.contains('is-visible')) {
			hide(elem);
			return;
		}
		// Otherwise, show it
		show(elem);
	};
	// Listen for click events
	document.addEventListener('click', function (event) {
		// Make sure clicked element is our target toggle
		if (!event.target.classList.contains('visible')) return;
		// Prevent default link behavior
		event.preventDefault();
		// Get the content
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
	//END Topic #08-11-12-13 Triggering CSS3 with (Vanilla) JavaScript 





//week 6 css transtions using javascript
// Show an element
var show = function (elem) {

	// Get the natural height of the element
	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};

	var height = getHeight(); // Get the natural height
	elem.classList.add('is-visible'); // Make the element visible
	elem.style.height = height; // Update the max-height

	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 350);

};

// Hide an element
var hide = function (elem) {

	// Give the element a height to change from
	elem.style.height = elem.scrollHeight + 'px';

	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);

	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('is-visible');
	}, 350);

};

// Toggle element visibility
var toggle = function (elem, timing) {

	// If the element is visible, hide it
	if (elem.classList.contains('is-visible')) {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);

};

// Listen for click events
document.addEventListener('click', function (event) {

	// Make sure clicked element is our toggle
	if (!event.target.classList.contains('toggle')) return;

	// Prevent default link behavior
	event.preventDefault();

	// Get the content
	var content = document.querySelector(event.target.hash);
	if (!content) return;

	// Toggle the content
	toggle(content);

}, false);
//end week 6 css transitions using javascript

//modify this code to satisfy the Javascript Loops, arrays, etc. fluency
app.get("/postal", function (req, res) {
	// Controller
	console.log("Received a request for the postal page");
	var params = {
		result: getResults(req.query)
	};
	res.render("postal", params);
});
app.get("/postal_service", function (req, res) {
	console.log("Received a request for the postal_service page");
	res.render("postal_service");
});
app.get("/calculateShipping", calculate);
//result: getResults(req.query)
function getResults(data) {
	if (data.submit == 'Add') {
		return add(data.num1, data.num2);
	} else if (data.submit == 'Subtract') {
		return subtract(data.num1, data.num2);
	} else if (data.submit == 'Multiply') {
		return multiply(data.num1, data.num2);
	} else if (data.submit == 'Divide') {
		return divide(data.num1, data.num2);
	} else {
		console.log("Something weird happened. What did you click on????");
	}
}
//app.get("/calculateShipping", calculate);
function calculate(request, response) {
	const lb = Number(request.query.lb);
	const oz = Number(request.query.oz);
	const type = request.query.type;

	if (lb == 0 &&
		oz > 4 && (type == "First Class Letter: Stamped" ||
			type == "First Class Letter: Metered")) {
		type = "Large Flat Envelope";
	}
	if (lb == 0 && oz > 13 && type == "First Class Envelopes: Large Flat") {
		type = "First Class Package";
	}
	getPrice(response, lb, oz, type);
}

function getPrice(response, lb, oz, type) {
	var price = 0.0;
	switch (type) {
		case "First Class Letter: Stamped":
			price = 1.0;

			break;
		case "First Class Letter: Metered":
			price = 2.0;
			break;
		case "First Class Envelope: Large Flat":
			price = 3.0;
			break;
		case "default":
			price = 4.0;
	}
	const params = {
		lb: lb,
		oz: oz,
		type: type,
		price: price
	};
	response.render("postal/results", params);




	app.get("/math", function (req, res) {
		// Controller
		console.log("Received a request for the math page");
		var params = {
			result: getResults(req.query)
		};
		res.render("math", params);
	});
	app.get("/math_service", function (req, res) {
		console.log("Received a request for the math_service page");
		res.render("math_service");
	});
	//app.get("/math", function (req, res) {
	function subtract(num1, num2) {
		// console.log("Subtract" + num1 + ' ' + num2);
		return parseInt(num1) - parseInt(num2);
	}

	function divide(num1, num2) {
		// console.log("Divide" + num1 + ' ' + num2);
		return parseInt(num1) / parseInt(num2);
	}

	function multiply(num1, num2) {
		// console.log("Multiply" + num1 + ' ' + num2);
		return parseInt(num1) * parseInt(num2);
	}

	function add(num1, num2) {
		// console.log("Add" + num1 + ' ' + num2);
		return parseInt(num1) + parseInt(num2);
	}
