/*javascript for topic #1*/

/*simple sort array*/
//<div id="1-simple-sorted-array">-
function simpleSortArray() {
	//form input values
	var a = document.getElementById('array1').value;
	var b = document.getElementById('array2').value;
	var c = document.getElementById('array3').value;
	var d = document.getElementById('array4').value;
	var e = document.getElementById('array5').value;

	//creates a new array
	var dreamVacay = new Array(5);

	//adds each value to the array
	dreamVacay.push(a, b, c, d, e);
	//sorts the array values a-d alphabeticlly
	dreamVacay.sort();
	//targets div and outputs sorted array result 
	document.getElementById("array-output-div").innerHTML = dreamVacay.join("<br>");
}

//*assoc array*/
//<div id="2-assoc-array">
function assocArray() {
	//form input values
	var fname = document.getElementById("assocValue1").value;
	var lname = document.getElementById("assocValue2").value;
	var age = document.getElementById("assocValue3").value;
	var gender = document.getElementById("assocValue4").value;

	//create the array with an index
	var assocArrayValues = [];

	//the assoc array value/key pairs
	assocArrayValues['First-Name'] = fname;
	assocArrayValues['Last-Name'] = lname;
	assocArrayValues['Age'] = age;
	assocArrayValues['Gender'] = gender;

	//gets target id and displays the valee/key pairs
	for (var index in assocArrayValues) {
		document.getElementById("resultAssocArray").innerHTML += (index + ":" + ' ' + assocArrayValues[index] + "<br />");
	}
}

/*functions*/
//<div id="3-js-math-function">
//<form id="calc">
function mathOutput() {
	//calculate
	//get form
	var form = document.getElementById("calc");
	//get result
	var out = form.elements["result"];
	//get two numbers
	var num1 = parseFloat(form.elements["num1"].value);
	var num2 = parseFloat(form.elements["num2"].value);
	//get operator
	var operator = parseFloat(form.elements["operator"].value);
	//set output depending on operator
	switch (operator) {
		//add
		case 0:
			out.value = num1 + num2;
			break;
			//subtract
		case 1:
			out.value = num1 - num2;
			break;
			//multiply
		case 2:
			out.value = num1 * num2;
			break;
			//divide
		case 3:
			out.value = (num1 / num2).toFixed(2);
			break;
		default:
			break;
	}
}

/*conditional statements*/
//<div id="4-conditional-stmt">
//<form id="dinnerAssignments">
function wardDinner() {
	//form input values
	var name = document.getElementById('name').value;
	var age = parseFloat(document.getElementById('age').value);
	
	//conditional statements with output messages based on the age value
	if (age <= 7) {
		document.getElementById('dinnerGroup').innerHTML = "Hi" + '  ' + name + ", you get to be our taste testers!";
	} else if (age > 7 && age <= 11) {
		document.getElementById('dinnerGroup').innerHTML = "Hi" + '  ' + name + ", you get to help the YM/YW with their assignments!";
	} else if (age > 11 && age <= 17) {
		document.getElementById('dinnerGroup').innerHTML = "Hi" + '  ' + name + ", you get to help with decorating the cultural hall!";
	} else if (age > 17 && age <= 30) {
		document.getElementById('dinnerGroup').innerHTML = "Hi" + '  ' + name + ", you get to help setup the cultural hall before dinner!";
	} else if (age > 30 && age <= 60) {
		document.getElementById('dinnerGroup').innerHTML = "Hi" + '  ' + name + ", you get to help clean up the cultural hall after dinner!";
	} else if (age > 60) {
		document.getElementById('dinnerGroup').innerHTML = "Hi" + '  ' + name + ", you get to help with whatever you want!";
	}
}
