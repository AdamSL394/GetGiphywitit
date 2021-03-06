var topics = ["Dogs", "Cats", "Basketball", "Fashion", "Art", "Music", "Nature", "Travel", "Fitness", "Concerts"];

function displayImages() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=SFCYakJUdnF5QsIgZWwX29D3FKB66cmk&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var title = $("<p>").text("Title: " + results[i].title)
            var image = $("<img>").attr("src", results[i].images.fixed_height_still.url);
            title.addClass("color");
            p.addClass("color");
            image.addClass("gif");
            image.attr("data-state", "still");
            image.attr("data-still", results[i].images.fixed_height_still.url);
            image.attr("data-active", results[i].images.fixed_height.url);
            $(gifDiv).append(p);
            $(gifDiv).append(title);
            $(gifDiv).append(image);
            $("#topicsButton").append(gifDiv);

        }
    })
}

function makingButtons() {
    $("#topButton").empty();
    for (var i = 0; i < topics.length; i++) {
        let buttonTopics = $("<button>");
        buttonTopics.addClass("theme");
        buttonTopics.attr("data-name", topics[i]);
        buttonTopics.text(topics[i]);
        $("#topButton").append(buttonTopics);
    }
}

$(document).on("click","#add-image", function(event) {
    event.preventDefault();
    var userInput = $("#giphy-input").val().trim();
    console.log(userInput)
    if (userInput == "") {
        alert("Please Choose your Favorite Dragon Ball Z Character!")
        return false;
    } else {
        topics.push(userInput);
        makingButtons();
    }
})

$(document).on("click", ".theme", function (){
    displayImages()
});

$(document).on("click", ".gif", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-active"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

$(document).ready(function (){
    makingButtons();

})

$(document).on("click", ".alignment",function (event){
    event.preventDefault()
    
})


