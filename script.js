
let skills = ["Javascript", "Node.js", "BrowserSync", "Gulp"];
let skillPosition = -1;
function writeText() {
	if (skillPosition === skills.length-1)
		skillPosition = 0;
	else
	skillPosition += 1;
	if (skillPosition === 0)
		document.getElementById("dynamic-text").innerHTML = skills[skillPosition];
	document.getElementById("dynamic-text").innerHTML = skills[skillPosition];
}
// Animating the burger and opening the navigation menu on small screen devices.
let burger = document.getElementById("top-burger");
burger.addEventListener("click", () =>
{
	console.log(burger.classList);
	burger.classList.toggle("c-header__burger-clicked");
	document.getElementsByClassName("c-header__nav")[0].classList.toggle("c-header__nav--active");
});

// To position profile pic in the centre.
function positionProfilePic() {
		let w = window.innerWidth;
		let h = window.innerHeight;
		let profilePic = document.getElementById("profile-picture");
		let marginLeft = (w-profilePic.getAttribute("height"))
			- (w-profilePic.getAttribute("height")-document.getElementById("icon-github").width);
		profilePic.setAttribute("style", `margin-left: ${marginLeft}`);

}
let interval = setInterval(writeText, 1000);
positionProfilePic();