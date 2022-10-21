var person1 = Math.floor(Math.random() * 6) + 1;//For selecting 
var person2 = Math.floor(Math.random() * 6) + 1;

var dice1img = "images/dice" + person1 + ".png"
var dice2img = "images/dice" + person2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", dice1img);
document.querySelectorAll("img")[1].setAttribute("src", dice2img);

if (person1 > person2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (person1 < person2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Match Draw";
}