console.log(partLibrary);

// Populate parts on screen based on data from parts.js.
function populatePartPage() {
	// Page 1 - ears.
	$("#screen-1-contents").html(populatePartList("ears"));
	// Page 2 - eyes.
	$("#screen-2-contents").html(populatePartList("eyes"));
}

// Populates part HTML based on type.
function populatePartList(partType) {
    let partList = "";

	for (i = 0; i < (Reflect.ownKeys(partLibrary[partType]).length - 1); i++) {
		console.log(i)
		console.log(partType)
		let bodyPart = partLibrary[partType[i]];
        console.log(bodyPart);
		let htmlBodyPart = "<img src = '" + bodyPart.icon + "' class = '" + bodyPart.partclass + "' data-id '" + bodyPart.id + "'/> ";

        console.log(htmlBodyPart);
		partList += htmlBodyPart;
	};	
    console.log(partList);
	return partList;
}

populatePartPage();