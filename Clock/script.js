function moveHands(){
    // Get all the clock hands in an array.
    let clockHands = Array.from(document.getElementsByClassName("clock__hands"));
    // Get current date and time.
    let date = new Date();
    // Set the clock hands at their initial position.
    clockHands[0].setAttribute("style", `transform: rotate(${360*date.getHours()/12}deg);`);
    clockHands[1].setAttribute("style", `transform: rotate(${360*date.getMinutes()/60}deg);`);
    clockHands[2].setAttribute("style", `transform: rotate(${360*date.getSeconds()/60}deg);`);
}
moveHands();
setInterval(moveHands,1000);