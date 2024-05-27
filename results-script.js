//we've managed to "grab" what the user selected. Now we need to generate the correct results with it.

//start with a whole list of destinations
//ideally, this would be updated from some database that is maintained with the latest info
//but just using this list for this simple web app
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
  //first, we create a new URLSearchParams object, called params, to read the query parameters from the current URL without having to do complicated string manipulation
  var params = new URLSearchParams(window.location.search);

  //next, we read the values of the selected area and activity
  //using the get method from the URLSearchParams object
  var selectedArea = params.get("area");
  var selectedActivity = params.get("activity");
  
  //based on the user's inputs on selected activity and area, we write an function to find the destination that matches
  // === is used to compare two values or expressions for strict equivalence (equal value and type)
  // && is used to say that BOTH area and activity must match; if either does not, it is not a match
  function isMatch (destination) {
    return destination.area === selectedArea &&
    destination.activity === selectedActivity;
  }
  
  //we used the find array method to search through my array of destinations and find the one that matches the selectedArea and selectedActivity
  //the destination will be stored in the variable destination
  var destination = destinations.find(isMatch);

  //use a container to display the result
  //first, we create a container variable using getElementbyID 
  var container = document.getElementById("container");
  
  //if there is a 'destination' i.e. a destination that matches both the selectedArea and selectedActivity, create a h4 element with the name of the destination and append it into the grid container
  if (destination) {
    var nameElement = document.createElement("h4");
    nameElement.innerText = destination.name;
    nameElement.classList.add("name");
    container.appendChild(nameElement);

    //create a link with the URL link of the destination and append it into the grid container 
    var link = document.createElement("a")
    link.innerText = "Find Out More"
    console.log(destination.link)
    link.href = destination.link
    container.appendChild(link)

    //show an error message if there are no matches
  } else {
    var noResultsMessage = document.createElement("p");
    noResultsMessage.innerText =
      "Sorry, we couldn't find any options for you. Please try another selection!";
    noResultsMessage.classList.add("error-message");
    container.appendChild(noResultsMessage);
  }
  
  //function to go back to the main page to enter a different set of parameters.  
  function back() {
    window.location.href = "/";
  }
  