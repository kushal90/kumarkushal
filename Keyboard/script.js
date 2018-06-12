function playSound(event) {
    //Use event.code to ignore Caps lock and other languages, etc.
    let keyId = event.code + "-audio";
    let key = document.getElementById(keyId.substring(0,4));
    let audio = document.getElementById(keyId);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e) {
    e.target.classList.remove("playing");
}
const keys = Array.from(document.getElementsByClassName("key key--unpressed"));
keys.forEach(element => element.addEventListener("transitionend", removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('touchstart', playSound, false);
