$(document).ready(function () {
    let queryURL = "https://www.eventbriteapi.com/v3/categories/?token=B3PPYGTJOHKVLZ7I7A4S"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (let i = 0; i < response.categories.length; i++) {
            let name = $("<button>")
            name.attr("data-id", response.categories[i].id)
            name.addClass("alignment")
            name.html(response.categories[i].name)
            $(".dropdown-menu").prepend(name)
        }
    })
})

$(document).on("click", ".alignment", function () {
    let location = $("#pac-input").val().trim();
    let category = ($(this).attr("data-id"))
    // let queryURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?start_date.range_start=2019-09-17T00:00:01Z&location.address=${location}&categories=${category}&expand=venue&token=B3PPYGTJOHKVLZ7I7A4S`
    let queryURL = 'https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?high_affinity_categories=103&token=B3PPYGTJOHKVLZ7I7A4S'
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        let data = (response.events);
        console.log("data", data)
        console.log("data", data.length)
        for (let i = 0; i < data.length; i++) {
            let card = $("<div>")
            card.addClass("card")
            let heading = $("<h2>").text(data[i].name.text)
            let image = $("<img>").attr("src", data[i].logo.url)
            let written = $("<p>").text(data[i].description.text.substring(0, 200) + "...")

            card.append(heading)
            card.append(image)
            card.append(written)
            $("#pictures").append(card)
        }
        if (image === "null") {
            console.log("hi")
        }
    })
})

$()

