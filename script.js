//when user clicks submit, the function showResults should run. The function needs is meant to recognise and understand what inputs were selected

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
  
  //the next thing the function should do is link us to the next page DO NOT UNDERSTAND
  window.location.replace(`results.html?area=${area}&activity=${activity}`);
  }

  //when user clicks the about button, it should lead to the html page with the problem statement and overview of user reseach info 
document.getElementById('aboutBtn').addEventListener('click', function() {
    window.location.href = 'about.html'; 
});