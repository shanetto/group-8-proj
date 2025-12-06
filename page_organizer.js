console.log(partLibrary);

// Populate parts on screen based on data from parts.js.
function populatePartPage() {
	// Page 1 - ears.
	applyHTMLPage("screen-1", "ear")
	// Page 2 - eyes.
	//applyHTMLPage("screen-2", "eye")
}

// Populates part HTML based on type.
function populatePartList(partType) {

	console.log("Validating part:", partType, validatePart(partType))
	if (validatePart(partType) == true) {

		let partList = "";

		for (i = 0; i < (Reflect.ownKeys(partLibrary[partType]).length - 1); i++) {
			let bodyPart = partLibrary[partType][i];
			let htmlBodyPart = "<img src = '" + bodyPart.icon + "' class = '" + bodyPart.partclass + "' data-id '" + bodyPart.id + "'/> ";

			console.log(htmlBodyPart);
			partList += htmlBodyPart;
		};	
		console.log(partList);
		return partList;
	};
};

function validatePart(partType) {
	const acceptableParts = ["ear", "eye", "mouth", "tail", "leg"];
	if (acceptableParts.includes(partType)) {
		return true;
	}
	else {
		return false;
	};
};

function applyHTMLPage (screen, part) {
	document.getElementById(screen).insertAdjacentHTML("afterend", populatePartList(part))
}


populatePartPage();