function playSound(event) {
    //Use event.code to ignore Caps lock and other languages, etc.
    let keyId = event.code + "-audio";
    let key = document.getElementById(keyId.substring(0,4));
    let audio = document.getElementById(keyId);
    // const keys = Array.from(document.getElementsByClassName("key"));
    // keys.forEach(element => element.classList.add('transparent'));
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
function playSoundtouch(event) {
    let key = event.changedTouches[0].target;
    let keyId = key.id + "-audio";
    let audio = document.getElementById(keyId);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e) {
    e.target.classList.remove("playing");
    // const keys = Array.from(document.getElementsByClassName("key"));
    // keys.forEach(element => element.classList.remove('transparent'));
}
const keys = Array.from(document.getElementsByClassName("key"));
keys.forEach(element => element.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playSound);
document.getElementById("keysDiv").addEventListener('touchstart', playSoundtouch);
