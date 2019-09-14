var topics = ["Dogs", "Cats", "Basketball", "Fashion", "Art", "Music", "Nature", "Travel", "Fitness", "Concerts"];

function displayImages() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=SFCYakJUdnF5QsIgZWwX29D3FKB66cmk&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        console.log(response);
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
        var buttonTopics = $("<button>");
        buttonTopics.addClass("theme");
        buttonTopics.attr("data-name", topics[i]);
        buttonTopics.text(topics[i]);
        $("#topButton").append(buttonTopics);
    }
}

$("#add-image").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#giphy-input").val().trim();
    if (userInput == "") {
        alert("Please Choose your Favorite Dragon Ball Z Character!")
        return false;
    } else {
        topics.push(userInput);
        makingButtons();
    }
})

makingButtons();
$(document).on("click", ".theme", displayImages);

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

function getCategories() {
    let queryURL = "https://www.eventbriteapi.com/v3/categories/?token=B3PPYGTJOHKVLZ7I7A4S"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for(let i = 0; i<response.categories.length; i++){
            let name = $("<button>")
            name.attr("data-id", response.categories[i].id)
            name.addClass("alignment")
            name.html( response.categories[i].name)
           $(".dropdown-menu").prepend(name)
        }
    })
}




getCategories()

$(document).on("click", ".theme", function () {
    let location = $("#location").val();
    console.log(location)
    let category = ""

    let queryURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?location.address=${location}&categories=101&token=B3PPYGTJOHKVLZ7I7A4S`

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //    let imageTag = $("<img>").attr("src", (response[0].url))
        //     $(".card-body").append(imageTag)

    })
})