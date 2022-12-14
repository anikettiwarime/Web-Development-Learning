var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function () {
    var clickedButton = $(this).attr("id");
    userClickedPattern.push(clickedButton);
    playsound(clickedButton);
    animatePress(clickedButton);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("Wrong");
        var audio = new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    //For Animations
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //For Audio
    playsound(randomChosenColour);
}

function playsound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(name) {
    $("#" + name).addClass("pressed");
    setTimeout(function () {
        $("#" + name).removeClass("pressed")
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}