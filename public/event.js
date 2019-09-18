$(document).ready(function () {
    let queryURL = "https://www.eventbriteapi.com/v3/categories/?token=B3PPYGTJOHKVLZ7I7A4S"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (let i = 0; i < response.categories.length; i++) {
            let name = $("<button>")
            name.attr("data-id", response.categories[i].id)
            name.addClass("alignment btn btn-info")
            name.html(response.categories[i].name)
            $(".dropdown-menu").prepend(name)
        }
    })
})

$(document).on("click", ".alignment", function () {
    // $(".hide").style.visibility = "visible"
    document.getElementById("loader").style.visibility="visible";
    console.log("a")
    let location = $("#pac-input").val().trim();
    let category = ($(this).attr("data-id"))
    let queryURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?start_date.range_start=2019-09-17T00:00:01Z&location.address=${location}&categories=${category}&expand=venue&location.within=100mi&token=B3PPYGTJOHKVLZ7I7A4S`
    // let queryURL = 'https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?sort_by=date&categories=103&location.latitude=37.717550599999996&location.longitude=-122.4708578&location.within=100mi&token=B3PPYGTJOHKVLZ7I7A4S'
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        let data = (response.events);
        // console.log("data", data)
        // console.log("data", data.length)
        for (let i = 0; i < data.length; i++) {
            let card = $("<div>")
            card.addClass("card")
            let heading = $("<h3>").text(data[i].name.text)
            heading.addClass("cardHeading")
            let image = $("<img>").attr("src", data[i].logo.url)
            let written = $("<p>").text(data[i].description.text.substring(0, 200) + "...")
            let save = $("<button>")
            save.addClass("save btn btn-danger")
            save.text("save")
            card.append(heading);
            card.append(image);
            card.append(written);
            card.append(save);
            $("#pictures").append(card);
            $("#loader").slideUp('slow');
        }
        if (image === "null") {
            console.log("hi")
        }
    })
})

$(document).on("click", ".save",function(){
    // let a = $(".card")

    
    console.log($("#loader").slideUp('slow'))
    let b = $(this).val()
    let c = $(this).val()
})



