    var topics =["dogs", "cats", "basketball", "fashion", "art", "music", "nature", "travel", "fitness", "concerts"];

    
    var queryURL="http://api.giphy.com/v1/gifs/random?api_key=SFCYakJUdnF5QsIgZWwX29D3FKB66cmk&tag=&rating=G"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
        $("#topicsButton").on("click",function(){
            console.log(response.data.url)
            var image=$("<img>").attr( "src", response.data.image_url )
            console.log(image)
            $("#topicsButton").append(image)
        })
    

    function makingButtons(){


        for(var i = 0; i < topics.length; i++) {
            
            var buttonTopics = $("<button>");
           
            buttonTopics.addClass("topics");

            
            buttonTopics.text(topics[i]);
            
            $("#topicsButton").append(buttonTopics );
        }

    }
makingButtons()


   
   
    })
    // response()
    // console.log("hi")
    







// })
