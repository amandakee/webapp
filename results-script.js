//we've managed to "grab" what the user selected. Now we need to do something with it.

//start with a whole list of destinations
var destinations = [
    {
      name: "Canopy Changi Village",
      area: "east",
      activity: "eat",
      description: "This is a description of something to play in the east",
    },
    {
      name: "Plank Sourdough Pizza Faber Drive",
      area: "west",
      activity: "eat",
      description: "This is a description of something to play in the west",
    },
    {
      name: "The Vineyard at Hort Park",
      area: "south",
      activity: "play",
      description: "This is a description of something to play in the north",
    },
    {
      name: "Bee's Knees",
      area: "central",
      activity: "eat",
      description: "This is a description of something to play in the south",
    },
    {
      name: "Chaos Lab",
      area: "east",
      activity: "play",
      description: "This is a description of something to eat in the east",
    },
    {
      name: "Science Centre KidsSTOP",
      area: "west",
      activity: "play",
      description: "This is a description of something to eat in the west",
    },
    {
      name: "KidZania",
      area: "south",
      activity: "eat",
      description: "This is a description of something to eat in the north",
    },
    {
      name: "Mandai Wildlife Reserves",
      area: "north",
      activity: "play",
      description: "This is a description of something else to eat in the north",
    },
    {
      name: "Keppel Centre for Art Education",
      area: "central",
      activity: "play",
      description: "This is a description of something to eat in the south",
    },
    {
      name: "Wheeler's Estate",
      area: "east",
      activity: "both",
      description: "This is a description of something to eat in the south",
    },
    {
      name: "Cafe Melba Mediapolis",
      area: "west",
      activity: "both",
      description: "This is a description of something to eat in the south",
    },
    {
      name: "Marche VivoCity",
      area: "south",
      activity: "both",
      description: "This is a description of something to eat in the south",
    },
    {
      name: "Prive Botanic Gardens",
      area: "central",
      activity: "both",
      description: "This is a description of something to eat in the south",
    },
  ];
  
  var params = new URLSearchParams(window.location.search);
  var selectedArea = params.get("area");
  var selectedActivity = params.get("activity");
  
  var destination = destinations.find(
    (destination) =>
      destination.area === selectedArea &&
      destination.activity === selectedActivity
  );
  var gridContainer = document.getElementById("grid-container");
  
  if (destination) {
    var nameElement = document.createElement("h4");
    nameElement.innerText = destination.name;
    nameElement.classList.add("name");
    gridContainer.appendChild(nameElement);
  
    var description = document.createElement("p");
    description.innerText = destination.description;
    description.classList.add("description");
    gridContainer.appendChild(description);
  } else {
    var noResultsMessage = document.createElement("p");
    noResultsMessage.innerText =
      "Sorry, we couldn't find any options for you. Please try another selection!";
    noResultsMessage.classList.add("error-message");
    gridContainer.appendChild(noResultsMessage);
  }
  
  function back() {
    window.location.replace("/");
  }
  