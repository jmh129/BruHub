$(document).ready(function () {
  console.log("Document is Ready");

  var cityInput;

  searchCity();

  function searchCity() {
    $("#search-btn").on("click", function (event) {
      event.preventDefault();
      cityInput = $("#search-text").val();
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
            console.log(response[i].name);
        }
    //   Need to create function that converts citys with spaces to have _ 
    });
  }
});
