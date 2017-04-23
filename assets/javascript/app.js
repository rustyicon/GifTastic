$(document).ready(function() {


var topics = ["Little Lolita Cosplay", "Video Game Cosplay", "Mecha Cosplay", "Attack on Titan Cosplay", "Steampunk Cosplay", "Anime Cosplay"];

	for (var i = 0; i < topics.length; i++) {
		//console.log(topics[i]);
		
		var cosplayBtn = $("<button class='buttons'>" + topics[i] + "</div>");

		cosplayBtn.attr("data-theme", topics[i]);

		$("#cosplay-btn").append(cosplayBtn);
		//var cosplayImage = $("<img>");
		//cosplayImage.attr("src", topics[i]);
		};

	

	$("button").on("click", function(event){

		//console.log(event);
		var theme = $(this).attr("data-theme");
		//console.log(this)
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + theme +"&api_key=dc6zaTOxFJmzC&limit=10";
		
		$.ajax({
			url: queryURL,
			method:"GET"
		}).done(function(response){
			//console.log(response)

			var results = response.data;

				for (var c = 0; c < results.length; c++) {

					if (results[c].rating !== "r" && results[c].rating !== "pg-13") {
					
					var gifDiv = $("<div class='item'>");

					var rating = results[c].rating;

					var p = $("<p>").text("Rating:" + rating);

					var gifImage = $("<img>");

					gifImage.attr("src", results[c].images.fixed_height.url);
						console.log(results[c].images.fixed_height.url)
					gifDiv.append(p);
					gifDiv.append(gifImage);

					$("#cosplays").prepend(gifDiv);


					}
					
				}



			});

	});

});