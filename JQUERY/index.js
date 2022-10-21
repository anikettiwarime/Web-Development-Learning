
$("input").keypress(function (event) {
    console.log(event.key);
    $("h1").text(event.key)
});

$("h1").on("click", function () {
    $("h1").css("color", "yellow")
});

$("button").on("click", function () {
    $("button").slideUp().slideDown().animate({opacity:05});
});

$("a").on("click", function () {
    $("button").fadeIn();
});