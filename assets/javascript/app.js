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

				for (var c = 0; c < results.length; c++) {

					//if (results[c].rating !== "r" && results[c].rating !== "pg-13") {
					
					var gifDiv = $("<div>");

					var rating = results[c].rating;

					var p = $("<p>").text("Rating:" + rating);

					var gifImage = $("<img class='gif'>");

					gifImage.attr("src", results[c].images.fixed_height.url);
					
					//console.log(results[c])
					gifDiv.append(p);
					gifDiv.append(gifImage);

					$("#bits").prepend(gifDiv);
					//}	
				}

			//$(".gif").data("data-state", still);
			//console.log("data-state")
			$("#bits").on("click", function (){
			//console.log($(".gif").data(state))
			//var state = $(this).attr("data-state");

			$(".gif").data("data-state", "still");
			
			state.data(still);

				if (state === "still") {
        			$(this).attr("src", $(this).attr("data-animate"));
        			$(this).attr("data-state", "animate");
      			} else {
        			$(this).attr("src", $(this).attr("data-still"));
        			$(this).attr("data-state", "still");
      			}	


			});
		});


	});

/*$("#new-bit-gif").on("click", function (event){
 		console.log(event);
		event.preventDefault();
		var newBtn = $("userbitBtn").val();
		topics.push(newBtn);
			
		function pushnewBtn (event){
			$("#bit-btns").html("");
			for (var i = 0; i < topics.length; i++) {
				$("#bit-btns").append("<button>"  + newBtn + "</button>");
				};

		//console.log(event);
		pushnewBtn(event);

		}	

	});*/

	/*function addBit (){
		var newBtn = $("userbitBtn").val();
		topics.push(newBtn);
		$("bit-btns").submit();
	}*/





});
	




