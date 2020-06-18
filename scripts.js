$(document).ready(function () {
  console.log("Document is Ready");

  //   var bruHubURL = "https://api.openbrewerydb.org/breweries?by_city=";

  //   $.ajax({
  //     url: bruHubURL,
  //     method: "GET",
  //   }).then(function (response) {
  //     console.log(response);
  //   });

  // receive search input and converts it to a variable that can be used in query
  // queries need their spaces changed to underscores to work
  function searchCity() {
    $("#search-btn").on("click", function (event) {
      event.preventDefault();
    //   console.log("button was clicked.");
      var cityInput = $("#search-text").val();
    //   console.log(cityInput);
    });
  }
});
