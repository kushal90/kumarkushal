let intro = "Hi! I am Kushal.";

function writeText(str) {
	let showing = "";
	for (let i = 0; i < str.length; i++){
		showing += str[i];
		document.getElementById("profile__text").innerHTML = showing;
		setTimeout(writeText, 1000);
	}
}
writeText(intro);
// Animating the burger and opening the navigation menu on small screen devices.
let burger = document.getElementsByClassName("c-header__burger");
burger[0].addEventListener("click", () =>
{
	console.log(burger[0].classList);
	burger[0].classList.toggle("c-header__burger-clicked");
});