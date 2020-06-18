$(document).ready(function(){

    $.ajax({
        url: "https://api.openbrewerydb.org/breweries/search?query=atlanta&city=atlanta",
        method: "get"
    }).then(function(response){
    console.log(response);
    })

    

    //On click function for #button1
    $("#button1").on("click",function(){
        $("body").css("background-color","white");
        console.log("button1")
    })
    //On click function for #button2
    $("#button2").on("click",function(){
        $.ajax({
            url: "https://official-joke-api.appspot.com/random_joke",
            method: "get"
        }).then(function(response){
            console.log(response);
        var jokeResponse = document.createElement("div");
        $(jokeResponse).html(response.setup+response.punchline);
        $(jokeResponse).attr("color","white");
        $("#joke").append(jokeResponse);
        })
    })

})