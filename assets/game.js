var topics = ["dogs", "cats", "basketball", "fashion", "art", "music", "nature", "travel", "fitness", "concerts"];

function displayImages(){

    var topic= $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=SFCYakJUdnF5QsIgZWwX29D3FKB66cmk&limit=5"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results= response.data
       
       console.log(response);
    
        for ( var i = 0; i <results.length;i++){
            
            var gifDiv=$("<div>");

            var p = $("<p>").text("Rating: " + results[i].rating)
      

            var image = $("<img>").attr("src", results[i].images.fixed_height.url);
            console.log(results[i].images.fixed_height.url)
            $(gifDiv).append(p);
            $(gifDiv).append(image);

            $("#topicsButton").append(gifDiv);
            
           
        
        }
    })
}

function makingButtons() {
    console.log("hi")
    $("#topicsButton").empty();
    for (var i = 0; i < topics.length; i++) {
        var buttonTopics = $("<button>");
        buttonTopics.addClass("theme");
        buttonTopics.attr("data-name", topics[i]);
        buttonTopics.text(topics[i]);
        $("#topicsButton").append(buttonTopics);
    }
}


    




$("#add-image").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#giphy-input").val();
    topics.push(userInput);
    makingButtons();
    

    })
    makingButtons();











//    })
   $(document).on("click",".theme",displayImages);
   



