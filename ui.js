const btt = document.querySelector("#btt");
btt.addEventListener('click', backToTop);

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		btt.classList.remove("btthidden");
	} else {
		btt.classList.add("btthidden");
	}
}

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}