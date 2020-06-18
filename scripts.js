$(document).ready(function () {
  console.log("Document is Ready");

  var cityInput;
  var breweryList;

  searchCity();

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
      }
    });
  }
});
