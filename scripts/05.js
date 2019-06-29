//<div id="storeName">
//clears the text field (input box)
var clearTextField = "";

//dispalys what is stored in the localStorage object
function checkLocalStorage() {

	//tests if browser supports localStorage method
	if (localStorage.getItem('first_name') === null && localStorage.getItem('last_name') === null) {
		document.getElementById("outputDiv_check_local_storage").innerHTML = "The localStorage first_name and last_name variables do not exist yet or are empty!"
	} else {
		//once validated, retrieves first_name, last_name variables stored locally
		var FirstName = localStorage.getItem('first_name');
		var LastName = localStorage.getItem('last_name');

		//parses the object
		var displayFirstName = JSON.parse(FirstName);
		var displayLastName = JSON.parse(LastName);

		//outputs locally stored value result onscreen
		document.getElementById("outputDiv_check_local_storage").innerHTML = "The name stored in localStorage is " +
			displayFirstName + " " + displayLastName;
	}
}

//inserts a variable in the localStorage object
function storeLocally() {

	//gets variable values from the input form
	var first_name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;

	localStorage.setItem('first_name', JSON.stringify(first_name));
	localStorage.setItem('last_name', JSON.stringify(last_name));
}



