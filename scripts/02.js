
/*
Topic #02: JavaScript Objects
Object Creation, Functions, Inheritance, Properties, Methods, Instantiation
*/

// creates a "User" object with a first and last name that we can combine
class User {
   constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
   }
}

User.prototype.createUserName = function() {
   let mid = !this._middleInitial ? `` : `${this._middleInitial}.`;
   this._userName = `${this._firstName} ${mid} ${this._lastName}`;
   return this._userName;
};

// creates a welcome message for our new user
User.prototype.welcomeMessage = function() {
   const userName = this.createUserName();
   const welcome_Message = `Welcome ${userName}. Please select your movie genres below !`;
   return welcome_Message;
};




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
