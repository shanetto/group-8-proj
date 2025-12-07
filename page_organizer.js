console.log(partLibrary);

// Populate parts on screen based on data from parts.js.
function populatePartPage() {
	// Page 1 - ears.
	applyHTMLPage("screen-1", "ear")
	// Page 2 - eyes.
	applyHTMLPage("screen-2", "eye")
	// Page 3 - mouth.
	applyHTMLPage("screen-3", "mouth")
	// Page 4 - tail.
	applyHTMLPage("screen-4", "tail")
}

// Populates part HTML based on type.
function populatePartList(partType) {

	console.log("Validating part:", partType, validatePart(partType))
	if (validatePart(partType) == true) {

		let partList = [];

		for (i = 0; i < (Reflect.ownKeys(partLibrary[partType]).length - 1); i++) {
			let bodyPart = partLibrary[partType][i];
			let htmlBodyPart = "<img src = '" + bodyPart.icon + "' class = '" + bodyPart.partclass + "' data-id '" + bodyPart.id + "'/> ";

			console.log(htmlBodyPart);
			partList.push(htmlBodyPart);
		};	
		console.log(partList);
		return partList;
	};
};

// Asserts that the part is supported.
function validatePart(partType) {
	const acceptableParts = ["ear", "eye", "mouth", "tail", "leg"];
	if (acceptableParts.includes(partType)) {
		return true;
	}
	else {
		return false;
	};
};

// Inserts HTML part based on ID location.
function applyHTMLPage (screen, part) {
	const elementHTML = document.getElementById(screen);
	//const newImg = document.createElement('img');

	let partList = populatePartList(part)
	//console.log(partList)
	for (const element of partList) {
		console.log(element)
		elementHTML.innerHTML += element
		//elementHTML.insertAdjacentHTML("afterend", element)
		//newImg.innerHTML = element
		//elementHTML.appendChild(newImg)	
	};
	
	//element.insertAdjacentHTML("afterend", populatePartList(part))
};

// Trigger by default.
populatePartPage();