$(document).ready(function() {


var topics = ["Little Lolitas", "Crossplayers", "Mecha Cosplay", "Kirigumi", "Steampunk", "Zombify"];

	for (var i = 0; i < topics.length; i++) {
		//console.log(topics[i]);
		
		var cosplayBtn = $("<button class='buttons'>" + topics[i] + "</div>");

		$("#cosplay-btn").append(cosplayBtn);
		//var cosplayImage = $("<img>");
		//cosplayImage.attr("src", topics[i]);
		};

	for (var c = 0; c < topics.length; c++) {
		var themeData =  

		};

$("button").on("click", function(event){

		//console.log(event);
		var theme = $(this).attr("data-theme");

		queryURL = "http://api.giphy.com/v1/gifs/search?q=" + theme +"&api_key=dc6zaTOxFJmzC&limit=10";
		$.axaj({
			url
		});




})
































});