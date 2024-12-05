


$("button").on("mouseover", function() {
    $("button").css("color", "blue");
});

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});







