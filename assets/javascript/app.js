$(document).ready(function() {


	var topics = [ "8 Bit Friends", "8Bit Game", "Trippy 8 Bit", "8 Bit Pizza", "Jurassic Park 8 Bit", "Unicorns 8Bit"];

	
	for (var i = 0; i < topics.length; i++) {
				
		var BitBtn = $("<button class='buttons'>" + topics[i] + "</div>");

		BitBtn.attr("data-theme", topics[i]);
		
		//console.log(topics[i])

		$("#bit-btns").append(BitBtn);
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

				for (var i = 0; i < results.length; i++) {

					//if (results[c].rating !== "r" && results[c].rating !== "pg-13") {
					
					var gifDiv = $("<div class='img'>");
 
					var rating = results[i].rating;

					var p = $("<p>").text("Rating:" + rating);

					var gifImage = $("<img class='gif'>");

					var gifURL = results[i].images.fixed_height_still.url;

					var animate = results[i].images.fixed_height.url;

					gifImage.attr("src", gifURL);

					gifImage.attr("data-state", "still");

					gifImage.attr("data-animate", animate);

					//console.log(results[c])
					gifDiv.append(gifImage);
					gifDiv.append(p);

					$("#bits").prepend(gifDiv);
					//}	
				}

						//console.log("data-state")
		$(".gif").on("click", function (event){
		console.log(event)
		event.preventDefault();

		var state = $(this).attr("src");

		var animate = $(this).attr("data-animate");
						//var animate = $(this).attr("data-animate");
						//var obj = JSON.stringify(still);
							

		$(this).attr("src", animate);
					
		$(this).attr("data-animate", state);
						
		
		});
		
		$("#new-bit-gif").on("click", function (event){
 		
		event.preventDefault();
		newBtn = $("#userbitInput").val().trim();
		topics.push(newBtn); 
		//console.log(event)
		/*function pushnewBtn (event){
			$("#bit-btns").html("");
			for (var i = 0; i < topics.length; i++) {
				$("#bit-btns").append("<button>"  + newBtn + "</button>");
				};

		//console.log(event);
		pushnewBtn(event);*/

		});

	});
	});

	/*function addBit (){
		var newBtn = $("userbitBtn").val();
		topics.push(newBtn);
		$("bit-btns").submit();
	}*/
});
	




