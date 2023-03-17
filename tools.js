/* Place some HTML inside a tag#id */
const placeInDOM = (html, id) => {
	let targetEl = document.getElementById(id);
	targetEl.innerHTML = html;
}

/* Fancy LOG */
const log = (text, style) => {
	switch (style) {
	case "title":
		console.log(`%c${text}`, "background-color: #55c; color: #fff; line-height:1.4em; border-radius: 4px; padding:0 0.5em;");
		break;
	default:
		console.log(`${text}`);
	}
}

/* RETURN if a specific checkbox is checked */
const isCheckBoxChecked = id => document.querySelector('#' + id).checked;

/* Get the list of keys in an object */
const listKeysOfObjects = obj => {
	return Object.keys(obj);
} 

/* Pick and return one element from a given list */
const pickOne = list => {
	return list[Math.floor(Math.random() * list.length)];
}

/* Construct a checkboxes list and place it in HTML */
const prepareCheckboxes = (targetId, list, name) => {
	log(targetId);
	log(list);
	log(name);
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

