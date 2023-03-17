/* The made-on-the-spot list of pickable elements */
const currentSelectables = {};

/* Where to keep the propositions used to build the text */
const currentProposition = {};

/* OBTAIN A STRUCTURE FOR WORDS */
const getMainSubject = () => {
	let getTheChoosenSubjet = getSelectedCheckboxesOfName("subjects");
	return pickOne(assembleListOfUniqueElements(getTheChoosenSubjet, SUBJECTS));
}
const getRenderingTechniques = () => {
	return pickOne(STRUCT_RENDERING);
}
const getFeatures = () => {
	return pickOne(STRUCT_FEATURES);
}
const getInspirationSources = () => {
	return pickOne(STRUCT_INSPIRATION);
}




/* Concat many array and return one with only unique elements */
const assembleListOfUniqueElements = (selectedCategories, sourceList) => {
	let elementsList = [];
	selectedCategories.forEach(key => {
		elementsList = elementsList.concat(sourceList[key]);
	});
	return [...new Set(elementsList)];
}

/* Reload the lists to take checkboxes into account */
const getOneFreshListFrom = (CheckboxGroupName, fulllist) => {
	let selectedCategoriesForNextPrompt = getSelectedCheckboxesOfName(CheckboxGroupName);
	return assembleListOfUniqueElements(selectedCategoriesForNextPrompt, fulllist);
}

/* Where to pick random word */
const configSelectables = [
	{name: "characters", bib: BIB_CHARACTERS},
	{name: "adj_chara", bib: ADJ_CHARA},
	{name: "colors", bib: BIB_COLORS},
	{name: "materials", bib: BIB_MATERIAL},
	{name: "lookalike", bib: BIB_CELEB},
	{name: "features", bib: BIB_FEATURES},
	{name: "buildings", bib: BIB_BUILDINGS},
	{name: "objects", bib: BIB_OBJECTS},
	{name: "techniques", bib: BIB_RENDERING},
	{name: "inspiration", bib: BIB_INSPIRATION},
	];


/* Refresh list taking checked checkbox into account */
const refresh_all_lists = () => {
	for (item of configSelectables){
		currentSelectables[item.name] = getOneFreshListFrom(item.name, item.bib);
	}
}

/* Replace marker by real words picked at random in a selection */
const replacingWords = text => {
	refresh_all_lists();
	console.time('replacer');
	let loop = 0;
	while(!!text && text.includes('%') && loop <= 300){

		text = text.replace('%color', pickOne(currentSelectables.colors));
		text = text.replace('%adj_chara', pickOne(currentSelectables.adj_chara));
		text = text.replace('%character', pickOne(currentSelectables.characters));
		text = text.replace('%material', pickOne(currentSelectables.materials));
		text = text.replace('%animal', pickOne(BIB_CHARACTERS["Animals"]));
		text = text.replace('%plant', pickOne(BIB_CHARACTERS["Plants, Vegetation"]));
		text = text.replace('%celeb', pickOne(currentSelectables.lookalike));
		text = text.replace('%feature', pickOne(currentSelectables.features));
		text = text.replace('%building', pickOne(currentSelectables.buildings));
		text = text.replace('%object', pickOne(currentSelectables.objects));
		text = text.replace('%technique', pickOne(currentSelectables.techniques));
		text = text.replace('%inspiration', pickOne(currentSelectables.inspiration));
		text = text.replace('%action', pickOne(BIB_ACTIONS));

		//text = text.replace('%hair', getHairStyle());
		//text = text.replace('%adj_object', pickOne(adj_objects));
		//text = text.replace('%place', getPlace());
		//text = text.replace('%adj_place', pickOne(adj_places));
		//text = text.replace('%cloth', pickOne(getClothsSet()));

		loop++; // failsafe
		if(loop >=300){
			console.log("A %word is probably misspelled => infinite loop");
			text = text.replace('%', "!! bug with ====> ");
			console.timeEnd('replacer');
			return text;
		}
	}
	console.timeEnd('replacer');
	return text;
}


const refreshTexts = () => {
	displayText();
	displayParts();
}

const buildSubject = () => {
	currentProposition.subject = replacingWords(getMainSubject());
	refreshTexts();
}
const buildLookalike = () => {
	currentProposition.lookalike = " " + replacingWords(pickOne(PHRASES_LOOKALIKE));
	refreshTexts();
}
const buildFeatures = () => {
	currentProposition.features = " " + replacingWords(getFeatures());
	refreshTexts();
}
const buildRendering = () => {
	currentProposition.rendering = " " + replacingWords(getRenderingTechniques());
	refreshTexts();
}
const buildInspiration = () => {
	currentProposition.inspiration = " " + replacingWords(getInspirationSources());
	refreshTexts();
}


/* ADD CHECKBOXES FOR COMPOSITION INGREDIENTS */
const configCategoryCheckboxes = [
	{boxId: "lookalike", propositionName: "lookalike"},
	{boxId: "features", propositionName: "features"},
	{boxId: "renderings", propositionName: "rendering"},
	{boxId: "inspirationsource", propositionName: "inspiration"},
	];
const composeTheFinalText = () => {
	let html = "";
	html += currentProposition.subject;
	configCategoryCheckboxes.forEach(cbox => {
		if(isCheckBoxChecked(cbox.boxId)){
			html += currentProposition[cbox.propositionName];
		}
	});
	return html;
}





/* Gather information and construct a text */
const generateNewPrompt = () => {
	log("Generation of a new prompt", "title");
	let html = "";
	buildSubject();
	buildLookalike();
	buildFeatures();
	buildRendering();
	buildInspiration();
	/* TODO adding artists */
}


const displayParts = () => {
	if (!!currentProposition.subject){ placeInDOM(currentProposition.subject, 'onlyChangeSubject') };
	if (!!currentProposition.lookalike){ placeInDOM(currentProposition.lookalike, 'onlyChangeLookalike') };
	if (!!currentProposition.features){ placeInDOM(currentProposition.features, 'onlyChangeFeatures') };
	if (!!currentProposition.rendering){ placeInDOM(currentProposition.rendering, 'onlyChangeRendering') };
	if (!!currentProposition.rendering){ placeInDOM(currentProposition.inspiration, 'onlyChangeInspiration') };
}



const displayText = () => {
	console.log("Displaying text");
	html = composeTheFinalText();
	document.querySelector("#prompt").innerHTML = html;
	if(isCheckBoxChecked("clipboard")){
		navigator.clipboard.writeText(html);	
	}
}





/* PREPARATION OF PART BUTTONS : they must listen to click event */
const configPartButtons = [
	{id: "#onlyChangeSubject", callback: buildSubject},
	{id: "#onlyChangeLookalike", callback: buildLookalike},
	{id: "#onlyChangeFeatures", callback: buildFeatures},
	{id: "#onlyChangeRendering", callback: buildRendering},
	{id: "#onlyChangeInspiration", callback: buildInspiration},
	];

const preparePartsButtons = () => {
	for (item of configPartButtons){
		document.querySelector(item.id).addEventListener('click', item.callback);
	}
}

/* PREPARATION OF CHECKBOXES LISTS */
const prepareAllCheckboxesLists = () => {
	prepareCheckboxes("#charaAdjCheckboxes", ADJ_CHARA, "adj_chara");
	prepareCheckboxes("#subjectsList", SUBJECTS, "subjects");
	prepareCheckboxes("#colorList", BIB_COLORS, "colors");
	prepareCheckboxes("#characters", BIB_CHARACTERS, "characters");
	prepareCheckboxes("#materials", BIB_MATERIAL, "materials");
	prepareCheckboxes("#lookalikes", BIB_CELEB, "lookalike");
	prepareCheckboxes("#features", BIB_FEATURES, "features");
	prepareCheckboxes("#techniques", BIB_RENDERING, "techniques");
	prepareCheckboxes("#buildings", BIB_BUILDINGS, "buildings");
	prepareCheckboxes("#objects", BIB_OBJECTS, "objects");
	prepareCheckboxes("#inspiration", BIB_INSPIRATION, "inspiration");
}





/* Show or hide unused parts buttons */
const toggleButtons = () => {
	/* TODO logic */
	/* check all ingredients checkboxes */
	/* for those checked, give the active class to the corresponding part button */
	/* the other should have a display: none; */
}


const prepareAllIngredientsButtons = () => {
	let allIngredientsCheckboxes = document.querySelectorAll("input[name=ingredients]");
	for(elem of allIngredientsCheckboxes){
		elem.addEventListener('click', toggleButtons);
	}
}

const prepareGenerateButton = () => {
	document.querySelector("#btnGenPrompt").addEventListener('click', generateNewPrompt);
}

/* Prepare the HTML for it to be usable */
const init = () => {
	prepareGenerateButton();
	prepareAllIngredientsButtons();
	prepareAllCheckboxesLists();
	preparePartsButtons();
}

init();
// generateNewPrompt();