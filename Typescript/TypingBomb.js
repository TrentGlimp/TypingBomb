function blockForXSeconds(counter) {
    var seconds = new Date().getTime() / 1000;
    var currentSeconds = new Date().getTime() / 1000;
    while (true) {
        currentSeconds = new Date().getTime() / 1000;
        if (seconds + counter <= currentSeconds) {
            return 0;
        }
    }
}
function typingBomb() {
    var seconds = new Date().getTime() / 1000;
    seconds = Math.round(seconds);
    if (seconds % 15 === 0) {
        console.log("KABOOM!");
        console.log("a" / 4);
    }
    else {
        console.log("tick");
    }
}
//MARK: End of function definitions
while (true) {
    blockForXSeconds(1);
    typingBomb();
}
