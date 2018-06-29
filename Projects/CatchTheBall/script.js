document.addEventListener('DOMContentLoaded', function(){
	let messages = ["Welcome to the game",
		"Excellent clickin'!",
		"You're good!",
		"Have you played this before?",
		"Insanity!",
		"God level"];
	let level = 0;
	let levelStrings = ["Click on the ball to proceed to next level.", "The game begins now", "Get ready for more speed", "Tap it fast!", "The end is near!", "Save your touchpad, back off!"];
	let ballMesageContainer = document.getElementById("c-container__right");
	let ball = document.getElementById("ball");
	let message = document.getElementById("c-message");
	let levelCompletionMessage = document.getElementById("levelCompletionMessage");
	let nextLevelmessage = document.getElementById("nextLevel");
	let replayMessage = document.getElementById("replayMessage");
	let containerLeftText = document.getElementById("c-container__left");
	function isTouchDevice() {
		return 'ontouchstart' in document.documentElement;
	}
	showMessage();
	let touchOrClick = function() {

		if (level < 5){
			speedUpAnimation(this);
			level += 1;
			showMessage();
		}
		else {
			ball.style.display = "none";
			ballMesageContainer.classList.remove("fullHeight");
			message.style.display = "block";
			levelCompletionMessage.innerHTML="Wow! You did it champion!";
			nextLevelmessage.style.display = "none";
			replayMessage.style.display = "block";
		}
	};
	if(isTouchDevice()){
		ball.addEventListener("touchend", touchOrClick, false);
	} else{
		ball.addEventListener("click", touchOrClick, false);
	}

	function showMessage(){
		document.getElementById("levelCompletionMessage").innerHTML=messages[level];
		document.getElementById("nextLevel").innerHTML = `${levelStrings[level]}`;
		ball.style.display = "none";
		ballMesageContainer.classList.remove("fullHeight");
		console.log(window.getComputedStyle(ballMesageContainer).getPropertyValue("height"));
		message.style.display = "block";
		setTimeout(function() {
			ball.style.display = "block";
			message.style.display = "none";
			ballMesageContainer.classList.add("fullHeight");
		}, 3000);
	}

	function speedUpAnimation(element){
		let currentAnimationDuration = window.getComputedStyle(element).getPropertyValue("animation-duration");
		let newAnimationDuration;
		if (Number(currentAnimationDuration.split(`s`)[0]) > 1)
		{
			newAnimationDuration = Number(currentAnimationDuration.split(`s`)[0]) - 1 + `s`;
		}
		else {
			newAnimationDuration = Number(currentAnimationDuration.split(`s`)[0])/2 + `s`;
		}
		element.setAttribute("style", `animation-duration: ${newAnimationDuration}`);
	}



}, false);
