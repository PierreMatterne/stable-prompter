/* The made-on-the-spot list of pickable elements */
const currentSelectables = {
	characters: [],
	adj_chara: [],
	colors : [],
	materials: [],
	details: [],
	celebrities: [],
}

/* Obtain the main subject */
const getMainSubject = () => {
	let getTheChoosenSubjet = getSelectedCheckboxesOfName("subjects");
	return pickOne(assembleListOfUniqueElements(getTheChoosenSubjet, SUBJECTS));
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

/* Refresh list taking checked checkbox into account */
const refresh_all_lists = () => {
	currentSelectables.characters = getOneFreshListFrom("characters", BIB_CHARACTERS);
	currentSelectables.adj_chara = getOneFreshListFrom("adj_chara", ADJ_CHARA);
	currentSelectables.colors = getOneFreshListFrom("colors", BIB_COLORS);
	currentSelectables.materials = getOneFreshListFrom("materials", BIB_MATERIAL);
	currentSelectables.celebrities = getOneFreshListFrom("celebrities", BIB_CELEB);
	currentSelectables.details = getOneFreshListFrom("details", BIB_DETAILS);
}

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
		text = text.replace('%celeb', pickOne(currentSelectables.celebrities));
		text = text.replace('%detail', pickOne(currentSelectables.details));

		//text = text.replace('%hair', getHairStyle());
		//text = text.replace('%material', pickOne(materials));
		//text = text.replace('%object', getObject());
		//text = text.replace('%adj_object', pickOne(adj_objects));
		//text = text.replace('%place', getPlace());
		//text = text.replace('%building', pickOne(listBuildings));
		//text = text.replace('%action', getAction());

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

/* WIP ================== WIP */





const currentProposition = {
	subject : null,
	lookalike : null,
	details : null,
};



const buildSubject = () => {
	currentProposition.subject = replacingWords(getMainSubject());
	displayText();
}
const buildLookalike = () => {
	currentProposition.lookalike = replacingWords(pickOne(PHRASES_LOOKALIKE));
	displayText();
}
const buildDetails = () => {
	currentProposition.details = replacingWords(pickOne(PHRASES_DETAILS));
	displayText();
}

const composeTheFinalText = () => {
	let html = "";
	html += currentProposition.subject;
	if(isCheckBoxChecked("celebrity")){
		html += currentProposition.lookalike
	};
	if(isCheckBoxChecked("detail")){
		html += currentProposition.details
	};
	return html;
}


/* Gather information and construct a text */
const generateNewPrompt = () => {
	console.clear();
	log("Generation of a new prompt", "title");
	let html = "";

	buildSubject();
	buildLookalike();
	buildDetails();

	/* TODO getting "ingredients" */
	/* TODO getting the techniques */
	/* TODO adding artists */
	/* TODO adding influences */

	displayText();
}



const displayText = () => {
	html = composeTheFinalText();
	document.querySelector("#prompt").innerHTML = html;
	
	if(isCheckBoxChecked("clipboard")){
		navigator.clipboard.writeText(html);	
	}
}




/* WIP ================== WIP */



const prepareAllCheckboxesList = () => {
	prepareCheckboxes("#charaAdjCheckboxes", ADJ_CHARA, "adj_chara");
	prepareCheckboxes("#subjectsList", SUBJECTS, "subjects");
	prepareCheckboxes("#colorList", BIB_COLORS, "colors");
	prepareCheckboxes("#characters", BIB_CHARACTERS, "characters");
	prepareCheckboxes("#materials", BIB_MATERIAL, "materials");
	prepareCheckboxes("#celebrities", BIB_CELEB, "celebrities");
	prepareCheckboxes("#details", BIB_DETAILS, "details");
}


/* Prepare the HTML for it to be usable */
const init = () => {
	/* Setting "Generate" button */
	let buttonGeneratePrompt = document.querySelector("#btnGenPrompt");
	buttonGeneratePrompt.addEventListener('click', generateNewPrompt);

	prepareAllCheckboxesList();
}

init();
generateNewPrompt();