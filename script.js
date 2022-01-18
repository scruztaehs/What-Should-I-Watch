let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {
	for (let scarymovies of horror){
        $(".horror").append("<p>" + scarymovies + "</p>");
    }});

let action = ["Spiderman", "Superman", "Sonic"];

$(".action").click(function() {
	for (let actionmovies of action){
        $(".action").append("<p>" + actionmovies + "</p>");
    }});

let comedy = ["Bad Boys", "Hangover", "ted"];
$(".comedy").click(function() {
	for (let comedymovies of comedy){
        $(".comedy").append("<p>" + comedymovies + "</p>");
        
	 }});