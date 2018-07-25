
let skills = ["Javascript", "Node.js", "BrowserSync", "npm"];
let skillPosition = -1;
function writeText() {
	if (skillPosition === skills.length-1)
		skillPosition = 0;
	else
	skillPosition += 1;
	if (skillPosition === 0)
		document.getElementsByClassName("c-main-text-dynamic-text")[0].innerHTML = skills[skillPosition];
	document.getElementsByClassName("c-main-text-dynamic-text")[0].innerHTML = skills[skillPosition];
}
// Animating the burger and opening the navigation menu on small screen devices.
let burger = document.getElementsByClassName("c-navigation-burger")[0];
burger.addEventListener("click", () =>
{
	burger.classList.toggle("c-navigation-burger__clicked");
	document.getElementsByClassName("c-all-content-links")[0].classList.toggle("c-all-content-links__active");
});

// To position profile pic in the centre.
function positionProfilePic() {
		let w = window.innerWidth;
		let h = window.innerHeight;
		let profilePic = document.getElementsByClassName("c-profile-pic-and-icons-profile-pic")[0];
		let marginLeft = (w-profilePic.width)
			- (w-profilePic.width-document.getElementsByClassName("c-profile-pic-and-icons-social-icons-link-github")[0].width) + profilePic.width*4/100;
		profilePic.setAttribute("style", `margin-left: ${marginLeft}px`);
}

let interval = setInterval(writeText, 1000);
positionProfilePic();