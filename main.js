/* The made-on-the-spot list of pickable elements */
const currentSelectables = {
	characters: [],
	adj_chara: [],
	colors : [],
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
}


const replacingWords = text => {
	refresh_all_lists();

	console.time('replacer');
	let loop = 0;
	while(!!text && text.includes('%') && loop <= 300){

		text = text.replace('%color', pickOne(currentSelectables.adj_chara));
		text = text.replace('%adj_chara', pickOne(currentSelectables.colors));
		text = text.replace('%character', pickOne(currentSelectables.characters));

		//text = text.replace('%hair', getHairStyle());
		//text = text.replace('%adj_chara', getAdjChara());
		//text = text.replace('%actor', getActor());
		//text = text.replace('%material', pickOne(materials));
		//text = text.replace('%object', getObject());
		//text = text.replace('%adj_object', pickOne(adj_objects));
		//text = text.replace('%place', getPlace());
		//text = text.replace('%building', pickOne(listBuildings));
		//text = text.replace('%action', getAction());
		//text = text.replace('%plant', pickOne(archetypesThemedList.plants.list));
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







/* Gather information and construct a text */
const generateNewPrompt = () => {
	console.clear();
	log("Generation of a new prompt", "title");
	let html = "";

	/* Getting the main subject */
	html += getMainSubject();
	log(html);

	/* TODO replacing tag words inside html */
	html = replacingWords(html);
	log(html);

	/* TODO getting the likeness */

	/* TODO getting "ingredients" */

	/* TODO getting the techniques */

	/* TODO adding artists */

	/* TODO adding influences */

	document.querySelector("#prompt").innerHTML = html;
}
/* WIP ================== WIP */



const prepareAllCheckboxesList = () => {
	prepareCheckboxes("#charaAdjCheckboxes", ADJ_CHARA, "adj_chara");
	prepareCheckboxes("#subjectsList", SUBJECTS, "subjects");
	prepareCheckboxes("#colorList", BIB_COLORS, "colors");
	prepareCheckboxes("#characters", BIB_CHARACTERS, "characters");
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