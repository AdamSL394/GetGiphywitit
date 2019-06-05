var topics = ["Dogs", "Cats", "Basketball", "Fashion", "Art", "Music", "Nature", "Travel", "Fitness", "Concerts"];

function displayImages(){

    var topic= $(this).attr("data-name");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=SFCYakJUdnF5QsIgZWwX29D3FKB66cmk&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results= response.data
        console.log(response);
        for ( var i = 0; i <results.length;i++){
            var gifDiv=$("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var image = $("<img>").attr("src", results[i].images.fixed_height.url);
            image.addClass("gif")
            $(gifDiv).append(p);
            $(gifDiv).append(image);
            $("#topicsButton").append(gifDiv);
        }
    })
}
function makingButtons() {
    $("#topButton").empty();
    for (var i = 0; i < topics.length; i++) {
        var buttonTopics = $("<button>");
        buttonTopics.addClass("theme");
        buttonTopics.attr("data-name", topics[i]);
        buttonTopics.attr("data-state", "still");
        buttonTopics.attr("data-active","active");
        buttonTopics.text(topics[i]);
        $("#topButton").append(buttonTopics);
    }
}

$("#add-image").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#giphy-input").val();
    topics.push(userInput);
    makingButtons();
})
    makingButtons();

   $(document).on("click",".theme",displayImages);
   
    $(document).on("click",".gif",function(){
        var state=$(".theme").attr("data-state");
        console.log(state);
        if( state==="still"){
            console.log("hi")
            $(".theme").attr("src",results[i].images.fixed_height_still.url );
        }
    })


