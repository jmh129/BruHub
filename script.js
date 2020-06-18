$(document).ready(function () {
  var cityInput;
  var breweryList;
  var breweryWebsites;

  searchCity();
  renderJoke();
  renderMeme();
  // pageCounter();

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
        breweryWebsites = response[i].website_url;
        $("#search-results").removeClass("hide");
        $("#search-results").append(
          $("<li>" + breweryList + " - Check These Losers Out: " + breweryWebsites + "</li>")
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

  //Counter API call
  // function pageCounter() {
  //   $.ajax({
  //     url:
  //       "https://api.countapi.xyz/hit/jmh129.github.io/BruHub/visits",
  //     method: "get",
  //   }).then(function (response) {
  //     $("#visits").text(response.value + " people like to party.");
  //   });
  // }
});
