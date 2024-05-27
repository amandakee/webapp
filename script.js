//when user clicks the about button, it should lead to the html page with the problem statement and overview of user reseach info 
function showAbout() {
    window.location.href = 'about.html'; 
}

//when user clicks submit, the function showResults should run. The function needs to recognise and understand what area and what activity were selected
function showResults() {
    //read the selected values for area and activity
    var area = document.getElementById("area").value; //should be east, west, central, north or south
    var activity = document.getElementById("activity").value; //should be whatever the user selected; "eat", "play", or "eat and play"
 
 
    //include error messages if no options are selected
    if (area === "default") {
      window.alert("Please select an area!");
      return;
    }
  
    if (activity === "default") {
      window.alert("Please select an activity!");
      return;
    }


  //the next thing the function should do is link us to the next page and also pass info about the user's inputs to the next page. 
  //window.location.href is used to set the URL to go to the results page with the respective query parameters
  //string concatenation is used to set the query parameters in the url
  window.location.href = "results.html?area=" + area + "&activity=" + activity
  }

