$(document).ready(function () {
  console.log("Document is Ready");

  var bruHubURL = ("https://api.openbrewerydb.org/breweries/search?");
  
  $.ajax({
    url: bruHubURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
});