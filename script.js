$(document).ready(function () {
  var cityInput;
  var breweryList;
  var breweryWebsites;
  var breweryStreetAddress;
  var breweryState;

  searchCity();
  renderJoke();
  renderMeme();

  function showResultsBox() {
    $("#search-results").attr("class", "container-1 row");
  }

  function hideWelcome(){
    $("#welcome").attr("class", "hide");
  }

  function hideResults(){
    $("#search-results").attr("class", "hide");
  }

  function searchCity() {
    $("#search-btn").on("click", function (event) {
      event.preventDefault();
      showResultsBox();
      hideWelcome();
      $("#joke").attr("src","");
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
      $("#search-results").empty();
      var searchResults = $("#search-results");
      var htmlStr = "";
      var randNum = Math.floor(Math.random() * response.length);
      breweryList = response[randNum].name;
      breweryWebsites = response[randNum].website_url;
      breweryStreetAddress = response[randNum].street;
      breweryState = response[randNum].state;
      breweryZip = response[randNum].postal_code;
      breweryPhone = response[randNum].phone;
      var website = breweryWebsites
        ? `<a href="${breweryWebsites}" target="_blank" class="card-link">Go to Their Website</a>`
        : `<p> Sorry Couldn't find their website.</p>`;
      htmlStr += `
          <div class="card col" style="width: 18rem;">
          <div class="card-body ">
          <h5 class="card-title">${breweryList}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${breweryStreetAddress} <br>
          ${breweryState}, ${breweryZip} <br>
          Phone: ${breweryPhone}
          </h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          ${website}
          <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="${breweryWebsites}" allowfullscreen></iframe>
        </div>
         </div>
        </div>`;
      searchResults.html(htmlStr);
    });
  }

  // RENDER JOKE FUNCTION
  function renderJoke() {
    $("#button2").on("click", function () {
      $("#search-results").empty();
        hideResults();
        hideWelcome();
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
  //  RENDER MEME FUNCTION
  function renderMeme() {
    $("#button1").on("click", function () {
      $("#search-results").empty();
      hideResults();
      hideWelcome();
      $.ajax({
        url: "https://meme-api.herokuapp.com/gimme",
        method: "get",
      }).then(function (response) {
        console.log(response);
        $("#joke").empty();
        var memeResponse = $("#joke");
        $(memeResponse).attr("src", response.url);
        $(memeResponse).attr("color", "white");
        $(memeResponse).addClass("class", "meme-image");
        $("#joke").append(memeResponse);
      });
    });
  }
});