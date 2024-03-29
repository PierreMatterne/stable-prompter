/* The made-on-the-spot list of pickable elements */
const currentSelectables = {};

/* Where to keep the propositions used to build the text */
const currentProposition = {};

/* OBTAIN A STRUCTURE FOR WORDS */
const getImageTypes = () => {
	let getChoosenImageTypes = getSelectedCheckboxesOfName("imagetypes");
	return pickOne(assembleListOfUniqueElements(getChoosenImageTypes, BIB_IMAGETYPES));
}
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
	{name: "adj_objects", bib: ADJ_OBJECTS},
	{name: "places", bib: BIB_PLACES},
	{name: "adj_places", bib: ADJ_PLACES},
	{name: "hairs", bib: BIB_HAIRS},
	{name: "cloths", bib: BIB_CLOTHS},
	];


/* Refresh list taking checked checkbox into account */
const refresh_all_lists = () => {
	for (item of configSelectables){
		currentSelectables[item.name] = getOneFreshListFrom(item.name, item.bib);
	}
	let numberOfRequestedArtist = document.querySelector('#artistssource').value;
	if(numberOfRequestedArtist > 0){
		currentSelectables["artists"] = getListOfSelectableArtists(numberOfRequestedArtist);
	}
}



const specialCasesConfig = [
	{idCheckbox: "excludeUnknown", keyInList: "isKnown"},
	{idCheckbox: "includeVIP", keyInList: "vip"},
	];


const getListCleanedOfSpecialCases = () => {
	let cleanedList = BIB_ARTISTS;
	specialCasesConfig.forEach(specialCase => {
		if(isCheckBoxChecked(specialCase.idCheckbox)){
			cleanedList = cleanedList.filter(artist => artist[specialCase.keyInList]);
		}
	});
	return cleanedList;
}



const getListOfSelectableArtists = (number) => {
	let requestedArtistCategory = getDetailsOfCheckboxesForSerie("chooseArtists"); 
	giveAllArtistsFirstCotation(BIB_ARTISTS);

	let cleanedArtistsList = getListCleanedOfSpecialCases();

	let finalArtistNameList = [];
	if(requestedArtistCategory.checkedList.length === 0){
		cleanedArtistsList.forEach(artist => {
			finalArtistNameList.push(artist.name);
		})
	}else{
		attributeMorePoints(requestedArtistCategory.checkedList);
		/* Get the best from witch randomly pick */
		limitForRandomPicking = 20;
		let sortedArtists = cleanedArtistsList.sort(sortingArtistsByCotation);
		let onlyFirstResults = sortedArtists.slice(0, limitForRandomPicking);
		onlyFirstResults.forEach(artist => {
			finalArtistNameList.push(artist.name);
		});
	}
	return finalArtistNameList;
}

const sortingArtistsByCotation = (a, b) => {
	return b.cotation - a.cotation;
}

/* Give a random "cotation" to every artist */
const giveAllArtistsFirstCotation = () => {
	BIB_ARTISTS.forEach( artist => {
		artist.cotation = Math.random() * (1.1 - 0.9) + 0.9; 
	} );
}

/* If a tag is present, artist's cotation increases */
const attributeMorePoints = tagsList => {
	for (let artist of BIB_ARTISTS){
		for (let tag of tagsList) {
			if (artist.tags.includes(tag)){
				artist.cotation += 1;
			}
		}
	}
}




const refreshTexts = () => {
	displayText();
	displayParts();
}

/* ==== BUILDERS ==== */
const buildImageType = () => {
	currentProposition.imageType = getImageTypes() + " " + pickOne(BINDING_IMAGETYPES) + " ";
	refreshTexts();
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
const buildArtist = () => {
	let requestedNumber = document.querySelector('#artistssource').value;
	selectablesArtistes = getListOfSelectableArtists(); 
	let selectedArtists = pickMany(selectablesArtistes, requestedNumber);
	displayGoogleLinks(selectedArtists);
	currentProposition.artists = composeHtmlForSelectedArtists(selectedArtists);
	refreshTexts();
}
/* ==== END BUILDERS ==== */


const composeHtmlForSelectedArtists = (list) => {
	let html = " " + pickOne(BIB_ARTIST_STARTER);
	if (list.length === 1){
		html += list[0];
	}else{
		let i;
		for (i=0; i<list.length-1; i++){
			html += `${list[i]}, `;
		}
		html += `and ${list[i]}.`;
	}
	return html;
}



/* ADD CHECKBOXES FOR COMPOSITION INGREDIENTS */
const configCategoryCheckboxes = [
	{boxId: "lookalike", propositionName: "lookalike"},
	{boxId: "features", propositionName: "features"},
	{boxId: "renderings", propositionName: "rendering"},
	{boxId: "inspirationsource", propositionName: "inspiration"},
	/* For artist, there is no checkboxes but an input range */
	];

const composeTheFinalText = () => {
	let html = "";
	if(isCheckBoxChecked("includetypes")){
		html += currentProposition.imageType;
	}
	if(isCheckBoxChecked("includetypes")){
		let str = currentProposition.subject;
	html += str?.charAt(0).toLowerCase() + str?.slice(1); /* ? because charAt return an error when str is null at first pass */
	}else{
		html += currentProposition.subject;
	}
	configCategoryCheckboxes.forEach(cbox => {
		if(isCheckBoxChecked(cbox.boxId)){
			html += currentProposition[cbox.propositionName];
		}
	});
	/* if artist */
	if(document.querySelector("#artistssource").value > 0){
		html += currentProposition["artists"];
	}
	return html;
}





/* Gather information and construct a text */
const generateNewPrompt = () => {
	let html = "";
	buildImageType();
	buildSubject();
	buildLookalike();
	buildFeatures();
	buildRendering();
	buildInspiration();
	buildArtist();
}

const buttonToggleHideOrFill = () => {

}

const displayParts = () => {
	/* IMAGE TYPE */
	document.querySelector("#onlyChangeImageType").classList.toggle('hidden', !isCheckBoxChecked("includetypes"));
	if(!!currentProposition.imageType){ placeInDOM(currentProposition.imageType, 'onlyChangeImageType') };
	/* SUBJECT */
	if (!!currentProposition.subject){ placeInDOM(currentProposition.subject, 'onlyChangeSubject') };
	/* CELEB LOOKALIKE */
	document.querySelector("#onlyChangeLookalike").classList.toggle('hidden', !isCheckBoxChecked("lookalike"));
	if (!!currentProposition.lookalike){ placeInDOM(currentProposition.lookalike, 'onlyChangeLookalike') };
	/* FEATURES */
	document.querySelector("#onlyChangeFeatures").classList.toggle('hidden', !isCheckBoxChecked("features"));
	if (!!currentProposition.features){ placeInDOM(currentProposition.features, 'onlyChangeFeatures') };
	/* RENDERING */
	document.querySelector("#onlyChangeRendering").classList.toggle('hidden', !isCheckBoxChecked("renderings"));
	if (!!currentProposition.rendering){ placeInDOM(currentProposition.rendering, 'onlyChangeRendering') };
	/* CULTURAL INSPIRATION */
	document.querySelector("#onlyChangeInspiration").classList.toggle('hidden', !isCheckBoxChecked("inspirationsource"));
	if (!!currentProposition.inspiration){ placeInDOM(currentProposition.inspiration, 'onlyChangeInspiration') };
	/* STYLE OF AN ARTIST */
	let conditionsForArtistsStuffToShow = parseInt(document.querySelector('#artistssource').value) === 0;
	document.querySelector("#onlyChangeArtists").classList.toggle('hidden', conditionsForArtistsStuffToShow);
	document.querySelector("#link_artists").classList.toggle('hidden', conditionsForArtistsStuffToShow);
	if (!!currentProposition.artists){ 
		placeInDOM(currentProposition.artists, 'onlyChangeArtists');
	};

}



const displayText = () => {
	html = composeTheFinalText();
	document.querySelector("#prompt").innerHTML = html;
	if(isCheckBoxChecked("clipboard")){
		navigator.clipboard.writeText(html);	
	}
}





/* PREPARATION OF PART BUTTONS : they must listen to click event */
const configPartButtons = [
	{id: "#onlyChangeImageType", callback: buildImageType},
	{id: "#onlyChangeSubject", callback: buildSubject},
	{id: "#onlyChangeLookalike", callback: buildLookalike},
	{id: "#onlyChangeFeatures", callback: buildFeatures},
	{id: "#onlyChangeRendering", callback: buildRendering},
	{id: "#onlyChangeInspiration", callback: buildInspiration},
	{id: "#onlyChangeArtists", callback: buildArtist},
	];

const preparePartsButtons = () => {
	for (item of configPartButtons){
		document.querySelector(item.id).addEventListener('click', item.callback);
	}
}

/* PREPARATION OF CHECKBOXES LISTS */
const prepareAllCheckboxesLists = () => {
	prepareCheckboxes("#imagetypeslist", BIB_IMAGETYPES, "imagetypes");
	prepareCheckboxes("#charaAdjCheckboxes", ADJ_CHARA, "adj_chara");
	prepareCheckboxes("#subjectsList", SUBJECTS, "subjects");
	prepareCheckboxes("#colorList", BIB_COLORS, "colors");
	prepareCheckboxes("#characters", BIB_CHARACTERS, "characters");
	prepareCheckboxes("#materials", BIB_MATERIAL, "materials");
	prepareCheckboxes("#lookalikes", BIB_CELEB, "lookalike");
	prepareCheckboxes("#featureslist", BIB_FEATURES, "features"); 
	prepareCheckboxes("#techniques", BIB_RENDERING, "techniques");
	prepareCheckboxes("#buildings", BIB_BUILDINGS, "buildings");
	prepareCheckboxes("#inspiration", BIB_INSPIRATION, "inspiration");
	prepareCheckboxes("#objects", BIB_OBJECTS, "objects");
	prepareCheckboxes("#adjobjects", ADJ_OBJECTS, "adj_objects");
	prepareCheckboxes("#places", BIB_PLACES, "places");
	prepareCheckboxes("#adjplaces", ADJ_PLACES, "adj_places");
	prepareCheckboxes("#hairs", BIB_HAIRS, "hairs");
	prepareCheckboxes("#cloths", BIB_CLOTHS, "cloths");
	prepareSpecialArtistCheckboxes("#artistlist", BIB_ARTISTS, "artists");
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

const setArtistNumber = event => {
	if (event.target.value === 0){
	/* TODO hide the "onlychange" button*/
	}else{
	/* TODO or place it */
	}
}

const computeNewArtistValue = event => {
	document.querySelector("#rangeValue").textContent = event.target.value;
}

const prepareArtistRangeSlider = () => {
	/* When sliding… */
	document.querySelector("#artistssource").addEventListener('input', computeNewArtistValue);
	/* When releasing… */
	document.querySelector("#artistssource").addEventListener('change', setArtistNumber);
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
	prepareArtistRangeSlider();
}

init();







// THERE IS PROBABLY A WAY TO SIMPLIFY ALL THIS…

// List of checkboxes
let descriptTypeOfPict = document.querySelector("#includetypes");
let descriptLookalike = document.querySelector("#lookalike");
let descriptFeatures = document.querySelector("#features");
let descriptRenderings = document.querySelector("#renderings");
let descriptInspiration = document.querySelector("#inspirationsource");
let descriptArtistSource = document.querySelector("#artistssource");
// List of sections
let targetPictureType = document.querySelector("#aboutPicturetypes");
let targetLookAlike = document.querySelector("#aboutLookalikes");
let targetFeatures = document.querySelector("#aboutFeatures");
let targetRenderings = document.querySelector("#aboutRenderings");
let targetInspiration = document.querySelector("#aboutInspiration");
let targetArtistSource = document.querySelector("#aboutArtists");
// Reactions
const checkDisplayOfTypesBox = (event) => {
	console.log(event.target.checked);
	targetPictureType.classList.toggle('visible');
}
const checkDisplayOfLookalikes = (event) => {
	console.log(event.target);
	targetLookAlike.classList.toggle('visible');
}
const checkDisplayOfFeatures = (event) => {
	console.log(event.target);
	targetFeatures.classList.toggle('visible');
}
const checkDisplayOfRenderings = (event) => {
	console.log(event.target);
	targetRenderings.classList.toggle('visible');
}
const checkDisplayOfInspiration = (event) => {
	console.log(event.target);
	targetInspiration.classList.toggle('visible');
}
const checkDisplayOfArtists = (event) => {
	console.log(event.target);
	if(event.target.value > 0){
		targetArtistSource.classList.add('visible');
	}else{
		targetArtistSource.classList.remove('visible');
	}
}
// Eventlisteners on checkboxes
descriptTypeOfPict.addEventListener('change', checkDisplayOfTypesBox);
descriptLookalike.addEventListener('change',  checkDisplayOfLookalikes);
descriptFeatures.addEventListener('change',  checkDisplayOfFeatures);
descriptRenderings.addEventListener('change',  checkDisplayOfRenderings);
descriptInspiration.addEventListener('change',  checkDisplayOfInspiration);
descriptArtistSource.addEventListener('change',  checkDisplayOfArtists);