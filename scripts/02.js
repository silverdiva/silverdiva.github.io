/*
Topic #02: JavaScript Objects
Object Creation, Functions, Inheritance, Properties, Methods, Instantiation
*/

//creates a new user for our movie premiere newsletter
function createUser() {
	// get all the relevant movie form input values that the welcome message uses
	fn = document.getElementById("first-name").value;
	ln = document.getElementById("last-name").value;

	//displays the values
	console.log(`${fn}, ${ln}`);
	//returns the new user object based on the form values
	return new User(fn, ln);
}

function sendWelcomeMessage() {
	const u = createUser();

	let welcome_Message = u.welcomeMessage();
	// shows the personalized welcome message with user's full name
	console.log(`${welcome_Message}`);
	document.getElementById("welcome-u").innerHTML = welcome_Message;
}

// creates a "User" object with a first and last name that we can combine
class User {
	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}
}

User.prototype.createUserName = function () {
	let mid = !this._middleInitial ? `` : `${this._middleInitial}.`;
	this._userName = `${this._firstName} ${mid} ${this._lastName}`;
	return this._userName;
};

// creates a welcome message for our new user
User.prototype.welcomeMessage = function () {
	const userName = this.createUserName();
	const welcome_Message = `Welcome ${userName}. Please select your movie genres below !`;
	return welcome_Message;
};



//still need to get this working 100%
//but in the meantime adding 'require' to the input tag accomplishes the same thing for the time being 
function MOVIEPREMIERES() {
	var name = document.getElementById("fname").value;
	var name = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var genre = document.getElementById("genre").value;


	if (fname.value == "") {
		window.alert("Please enter your first name.");
		name.focus();
		return false;
	}

	if (lname.value == "") {
		window.alert("Please enter your last name.");
		name.focus();
		return false;
	}

	if (email.value == "") {
		window.alert("Please enter a valid e-mail address.");
		email.focus();
		return false;
	}

	if (genre.selectedIndex < 1) {
		alert("Please select your movie genre(s).");
		what.focus();
		return false;
	}

	return true;
}
