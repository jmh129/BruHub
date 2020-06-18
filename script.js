$(document).ready(function () {
  console.log("Document is Ready");

  var cityInput;
  var breweryList;

  searchCity();
  renderJoke();
  renderMeme();

  function searchCity() {
    $("#search-btn").on("click", function (event) {
      event.preventDefault();
      cityInput = $("#search-text").val();
      cityInput = cityInput.split(" ").join("_");
      runOpenBrewAPI();
    });
  }

  function runOpenBrewAPI() {
    var OpenBrewAPIURL =
      "https://api.openbrewerydb.org/breweries?by_city=" + cityInput;

    $.ajax({
      url: OpenBrewAPIURL,
      method: "GET",
    }).then(function (response) {
      for (var i = 0; i < response.length; i++) {
        console.log(response);
        breweryList = response[i].name;
        $("#search-results").removeClass("hide");
        $("#search-results").append(
          $("<li>" + breweryList + "</li>")
        );
      }
    });
  }

  //On click function for #button2 NEED TO REWORK/CLEANUP
  function renderJoke() {
    $("#button2").on("click", function () {
      $.ajax({
        url: "https://official-joke-api.appspot.com/random_joke",
        method: "get",
      }).then(function (response) {
        $("#joke").empty();
        var jokeResponse = document.createElement("div");
        $(jokeResponse).html(
          response.setup + "<br><br><br><br>" + response.punchline
        );
        $(jokeResponse).attr("color", "white");
        $("#joke").append(jokeResponse);
      });
    });
  }
  // On click function for #button2
  function renderMeme() {
    $("#button1").on("click", function () {
      $.ajax({
        url: "https://meme-api.herokuapp.com/gimme",
        method: "get",
      }).then(function (response) {
        $("#joke").empty();
        var memeResponse = document.createElement("img");
        $(memeResponse).attr("src", response.url);
        $(memeResponse).attr("color", "white");
        $("#joke").append(memeResponse);
      });
    });
  }
});
