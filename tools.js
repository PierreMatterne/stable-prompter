/* Place some HTML inside a tag#id */
const placeInDOM = (html, id) => {
	let targetEl = document.getElementById(id);
	targetEl.innerHTML = html;
}

/* RETURN if a specific checkbox is checked */
const isCheckBoxChecked = id => document.querySelector('#' + id).checked;

/* Get the list of keys in an object */
const listKeysOfObjects = obj => {
	return Object.keys(obj);
} 

/* PICK many unique elements in a list */
const pickMany = (list, num) => {
	let newSet = new Set();
	if(list.length>num){
		while(newSet.size < num){
			newSet.add(pickOne(list));
		}
	}else{
		list.forEach(item =>{
			newSet.add(item);
		});
	}
	return Array.from(newSet);
}

/* Pick and return one element from a given list */
const pickOne = list => {
	return list[Math.floor(Math.random() * list.length)];
}

/* Construct a checkboxes list and place it in HTML */
const prepareCheckboxes = (targetId, list, name) => {
	let target = document.querySelector(targetId);
	let listeAdjCategories = listKeysOfObjects(list);
	let html = "";
	listeAdjCategories.forEach(cat => {
		html += `<input type="checkbox" name="${name}" data-tag="${cat}"><label>${cat}</label><br>`;
	});
	target.innerHTML = html;
}

/* Get full list and checked list for a specific checkbox list */
const getDetailsOfCheckboxesForSerie = (serie) => {
	let list =  document.querySelectorAll(`input[name="${serie}"]`);
	let fullList = [];
	let checkedList = [];
	for (let item of list){
		fullList.push(item.dataset.tag);
		if(item.checked){ checkedList.push(item.dataset.tag); }
	}
	return {fullList, checkedList};
}

/* Get and returns all checked values for a given checkbox list */
const getSelectedCheckboxesOfName = (serie) => {
	let listsOfTags = getDetailsOfCheckboxesForSerie(serie);
	return  listsOfTags.checkedList.length === 0 ? listsOfTags.fullList  : listsOfTags.checkedList;
}

/* Artist are special cases */
const prepareSpecialArtistCheckboxes = (targetId, list, name) => {
	let target = document.querySelector(targetId);
	let html ="";
	for (let cat in ARTISTS_TAGS_GLOSSARY){
		html += `<h4>${cat}</h4>`;
		for(let tag of ARTISTS_TAGS_GLOSSARY[cat]){
			html += `<input type="checkbox" name="chooseArtists" data-tag="${tag.tag}"><label>${tag.description}</label><br>`;
		}
	}
	target.innerHTML = html;
}

/* Replace marker by real words picked at random in a selection */
const replacingWords = text => {
	refresh_all_lists();
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
		text = text.replace('%adj_object', pickOne(currentSelectables.adj_objects));
		text = text.replace('%adj_place', pickOne(currentSelectables.adj_places));
		text = text.replace('%nameplace', pickOne(BIB_PLACENAMES));
		text = text.replace('%place', pickOne(currentSelectables.places));
		text = text.replace('%landmark', pickOne(BIB_LANDMARKS));
		text = text.replace('%hair', pickOne(currentSelectables.hairs));
		text = text.replace('%cloth', pickOne(currentSelectables.cloths));

		loop++; // failsafe
		if(loop >=300){
			console.log("A %word is probably misspelled => infinite loop");
			console.log(text);
			text = text.replace('%', "!! bug with ====> ");
			return text;
		}
	}
	return text;
}




/* Display some link to Google image */
const displayGoogleLinks = (list) =>{
	let html = "";
	list.forEach(name =>{
		html+= `<li><a href="https://www.google.com/search?tbm=isch&q=${name.replaceAll(' ', '+')}" target="_blank">${name}</a></li>`;
	});
	let el = document.getElementById('searchlinks');
	el.innerHTML = html;
}