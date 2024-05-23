  //when user clicks the about button, it should lead to the html page with the problem statement and overview of user reseach info 
  document.getElementById('aboutBtn').addEventListener('click', function() {
    window.location.href = 'about.html'; 
});

//when user clicks submit, the function showResults should run. The function needs is meant to recognise and understand what area and what activity were selected

function showResults() {
    var area = document.getElementById("area").value; //should be east, west, central, north or south
    var activity = document.getElementById("activity").value; //should be whatever the user selected; "eat", "play", or "eat and play"
  
    console.log(`selected area is ${area}`);
    console.log(`selected activity is ${activity}`);
 
    //include error messages if no options are selected
    if (area === "default") {
      window.alert("Please select an area!");
      return;
    }
  
    if (activity === "default") {
      window.alert("Please select an activity!");
      return;
    }


  //the next thing the function should do is link us to the next page and also pass info about the user's inputs to the next page. window.location.replace is used to replace the current document with a new one at the specified URL i.e. results.html. results.html?area=${area}&activity=${activity} constructs a URL with query parameters. Here, area and activity are variables that will be replaced by their respective values. These parameters are passed to results.html and can be used by that page to display specific results based on the values of area and activity.
  window.location.replace(`results.html?area=${area}&activity=${activity}`);
  }

