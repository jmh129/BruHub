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
        $("body").css("background-color","black");
        console.log("button2")
    })

})