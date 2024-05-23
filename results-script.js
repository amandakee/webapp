//we've managed to "grab" what the user selected. Now we need to generate the correct results with it.

//start with a whole list of destinations
var destinations = [
    {
      name: "Canopy Changi Village",
      area: "east",
      activity: "eat",
      link: "https://www.canopygardendining.com/location/canopy-changi-village/"
    },
    {
      name: "Plank Sourdough Pizza Faber Drive",
      area: "west",
      activity: "eat",
      link: "https://plankpizza.biz/our-locations/"
    },
    {
      name: "Bee's Knees",
      area: "central",
      activity: "eat",
      link: "https://www.beesknees.sg/beesknees-garage-menu"
    },
    {
      name: "The Vineyard at Hort Park",
      area: "south",
      activity: "eat",
      link: "https://www.vineyardhortpark.com.sg/"
    },
    {
    name: "Bollywood Veggies",
    area: "north",
    activity: "eat",
    link: "https://bollywoodfarms.com/"
    },
    {
      name: "Chaos Lab",
      area: "east",
      activity: "play",
      link: "https://chaos-lab.co/singapore/"
    },
    {
      name: "Science Centre KidsSTOP",
      area: "west",
      activity: "play",
      link: "https://www.science.edu.sg/visit-us/kidsstop"
    },
    {
      name: "KidZania",
      area: "south",
      activity: "play",
      link: "https://www.kidzania.com.sg/"
    },
    {
      name: "Mandai Wildlife Reserves",
      area: "north",
      activity: "play",
      link: "https://www.mandai.com/en.html"
    },
    {
      name: "Keppel Centre for Art Education",
      area: "central",
      activity: "play",
      link: "https://www.nationalgallery.sg/gallerykids/keppelcentre"
    },
    {
      name: "Wheeler's Estate",
      area: "north",
      activity: "both",
      link: "https://wheelersestate.com/"
    },
    {
      name: "Cafe Melba Mediapolis",
      area: "west",
      activity: "both",
      link: "https://www.cafemelba.com.sg/locations"
    },
    {
      name: "Marche VivoCity",
      area: "south",
      activity: "both",
      link: "https://www.marche-movenpick.sg/en/our-locations/vivocity"
    },
    {
      name: "Prive Botanic Gardens",
      area: "central",
      activity: "both",
      link: "https://www.theprivegroup.com.sg/prive-botanic-gardens"
    },
    {
      name: "East Coast Commune",
      area: "east",
      activity: "both",
      link: "https://www.eccommune.com/"
    },
  ];
  
  //get the user's inputs on activity and area from the previous page to this second results page.
  //first, we create a new object called params to access and manipulate the parameters in the query string from the current URL. we do this by using the urlsearchparams API

  var params = new URLSearchParams(window.location.search);

  //next, we create two new objects - the selected area and the selected activity by using the GET request i.e. get the area or activity parameter in the params object
  var selectedArea = params.get("area");
  var selectedActivity = params.get("activity");
  
  //based on the user's inputs on selected activity and area, we write an algorithm to find the destination that matches
  //we used the find method to search through my array of destinations and find the one that matches the selectedArea and selectedActivity
  //the destination will be stored in the variable destination
  //=== is used to compare two values or expressions, and it checks both the value and the type. This means that for the comparison to return true, the operands must be of the same type in addition to having the same value.
  var destination = destinations.find(
    (destination) =>
      destination.area === selectedArea &&
      destination.activity === selectedActivity
  );

  //use a grid container to display the result
  //first, we create a gridContainer variable using getElementbyID 
  var gridContainer = document.getElementById("grid-container");
  
  //if there is a 'destination' i.e. a destination that matches both the selectedArea and selectedActivity, create a h4 element with the name of the destination and append it into the grid container
  if (destination) {
    var nameElement = document.createElement("h4");
    nameElement.innerText = destination.name;
    nameElement.classList.add("name");
    gridContainer.appendChild(nameElement);

    //create a link with the URL link of the destination and append it into the grid container 
    var link = document.createElement("a")
    link.innerText = "Find Out More"
    console.log(destination.link)
    link.href = destination.link
    gridContainer.appendChild(link)

    //show an error message if there are no matches
  } else {
    var noResultsMessage = document.createElement("p");
    noResultsMessage.innerText =
      "Sorry, we couldn't find any options for you. Please try another selection!";
    noResultsMessage.classList.add("error-message");
    gridContainer.appendChild(noResultsMessage);
  }
  
  //function to go back to the main page to enter a different set of parameters.  window.location.replace("/"), is used to navigate to the root of the current domain without leaving a record in the browser's history for the current page.
  function back() {
    window.location.replace("/");
  }
  