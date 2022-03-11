let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    //animate button flash
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100);

    playSoundOnButtonClick(randomChosenColour);
}

//play sound on button click
function playSoundOnButtonClick(colourClick) {
    var audio = new Audio("sounds/"+colourClick+".mp3");
    audio.play();
}