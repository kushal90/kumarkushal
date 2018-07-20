function changeEmailText() {
	if (window.innerWidth < window.innerHeight) {
		document.getElementsByClassName("email")[0].getElementsByTagName("a")[0].innerHTML = "k.kumar13@hotmail.com";
	}
}
changeEmailText();