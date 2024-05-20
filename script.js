function showResults() {
    var area = document.getElementById("area").value; //should be ...
    var activity = document.getElementById("activity").value; //should be whatever the user selected; "eat", "play", or "eat and play"
  
    console.log(`selected area is ${area}`);
    console.log(`selected activity is ${activity}`);
  
    if (area === "default") {
      window.alert("Please select an area!");
      return;
    }
  
    if (activity === "default") {
      window.alert("Please select an activity!");
      return;
    }
  
    //our function recognizes the user's inputs in location and activity.
    window.location.replace(`results.html?area=${area}&activity=${activity}`);
  }
  