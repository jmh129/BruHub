$(document).ready(function(){
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
            var jokeResponse = document.createElement("div");
            $(jokeResponse).html(response.setup+"<br><br><br><br>"+response.punchline);
            $(jokeResponse).attr("color","white");
            $("#joke").append(jokeResponse);
        })
    })
})