/*JS for Topic #6 DOM Manipulation*/

//createElement(), appendChild() methods
//<div id="create-and-append">
function createImage() {
	//creates img element
	var image = document.createElement("IMG");
	//sets img attributes
	image.setAttribute("src", "rsz_pismo-mom-girls.jpg");
	image.setAttribute("height", "75");
	image.setAttribute("width", "90");
	image.setAttribute("alt", "kim-and-girls");
	//adds addtional img elements
	document.getElementById("create-and-append").appendChild(image);
}

//insertBefore(), appendChild() methods
//<div id="insertBefore-and-append">
function insertBeforeElement() {
	//creates a new button element
	var newElement = document.createElement("BUTTON");
	newElement.style.height = "25px"; 
	newElement.style.width = "25%";
	newElement.style.backgroundColor = "lightgray";
	newElement.style.fontSize = "15px";

	//creates text content displayed within the new button element
	var newContent = document.createTextNode("Yay! Now I'm 2nd!");

	//adds the new text content to the new button element 
	newElement.appendChild(newContent);

	//targets the div Id ("insertElem") where the new button element will be inserted 
	var getDiv = document.getElementById("insertElem");

	//adds the newly created "BUTTON" element ("var newElement") within the targeted div Id ("inserElem") and inserts it before the specified chld node index (".childNodes[2]")
	getDiv.insertBefore(newElement, getDiv.childNodes[2]);
}


//removeChild(), appendChild() methods
//<div id="remove-and-append">
var element = null;

function removeElement() {
	if (element == null) {
		//targets the div Id "myElement" to be removed
		element = document.getElementById("myElement");
		//removes the target element
		element.parentNode.removeChild(element);
	} else {
		//popup window alert to add an element (when trying to remove a previously removed element) 
		//cause you can't remove something that isn't there, right?
		alert("Oh snap! Looks like you already removed the element. Add it back so you can remove it again!");
	}
}

function insertElement() {
	if (element) {
		//targets the div Id "elemContainer" where the element will be inserted
		var elemContainer = document.getElementById("elemContainer");
		//adds element within the targeted Id
		elemContainer.appendChild(element);
		element = null;
	} else {
		//popup window alert to remove the element (when trying to add another element)
		//cause you aren't able to add any more elements with this function - just the one!
		alert("Oops! You can only add (1) element with this function. Remove it so you can add it again!");
	}
}
