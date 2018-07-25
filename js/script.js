
let skills = ["Javascript", "Node.js", "BrowserSync", "npm"];
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
	document.getElementsByClassName("c-all-content-links")[0].classList.toggle("c-all-content-links--active");
});

// To position profile pic in the centre.
function positionProfilePic() {
		let w = window.innerWidth;
		let h = window.innerHeight;
		let profilePic = document.getElementById("profile-picture");
		let marginLeft = (w-profilePic.width)
			- (w-profilePic.width-document.getElementById("icon-github").width) + profilePic.width*4/100;
		profilePic.setAttribute("style", `margin-left: ${marginLeft}px`);
}

let interval = setInterval(writeText, 1000);
positionProfilePic();