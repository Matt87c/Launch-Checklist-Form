window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(
    function (response) {
      response.json().then(function (json) {
        const div = document.getElementById("missionTarget");
        
        // Add HTML that includes the JSON data
        let randomIndex = Math.floor(Math.random() * json.length);
        div.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[randomIndex].name}</li>
   <li>Diameter: ${json[randomIndex].diameter}</li>
   <li>Star: ${json[randomIndex].star}</li>
   <li>Distance from Earth: ${json[randomIndex].distance}</li>
   <li>Number of Moons: ${json[randomIndex].moons}</li>
</ol>
<img src="${json[randomIndex].image}">
`;
      });
    }
  );
});

window.addEventListener("load", function () {
  let form = document.getElementById("launchForm");
  let pilotInput = document.querySelector("input[name=pilotName]");
  let coPilotInput = document.querySelector("input[name=copilotName");
  let fuelInput = document.querySelector("input[name = fuelLevel");
  let cargoInput = document.querySelector("input[name = cargoMass");

  form.addEventListener("submit", function () {
    if (
      pilotInput.value == "" ||
      coPilotInput.value == "" ||
      fuelInput.value == "" ||
      cargoInput.value == ""
    ) {
      alert("Invalid input. All fields are required.");
      event.preventDefault();
    }
    
    if (!isNaN(pilotInput.value)) {
      alert("Invalid input. Pilot name must be a string.");
      event.preventDefault();
    }
    
    if (!isNaN(coPilotInput.value)) {
      alert("Invalid input. Co-pilot name must be a string.");
      event.preventDefault();
    }
    
    if (isNaN(fuelInput.value)) {
      alert("Invalid input. Fuel level must be a number.");
      event.preventDefault();
    }
    
    if (isNaN(cargoInput.value)) {
      alert("Invalid input. Cargo mass must be a number.");
      event.preventDefault();
    }
    
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerText = `${pilotInput.value}`;
    
    let coPilot = document.getElementById("copilotStatus");
    coPilot.innerText = `${coPilotInput.value}`;

    if (parseInt(fuelInput.value) < 10000) {
      let faultyItemsElement = document.getElementById("faultyItems");
      faultyItemsElement.style.visibility = "visible";
      
      let fuelStatusElement = document.getElementById("fuelStatus");
      fuelStatusElement.innerText = "There is not enough fuel for the journey.";
      
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerText = "Shuttle not ready for launch.";
      launchStatus.style.color = "red";
      event.preventDefault();
      
    }else if (parseInt(cargoInput.value) > 10000) {
      let faultyItemsElement = document.getElementById("faultyItems");
      faultyItemsElement.style.visibility = "visible";
      
      let cargoStatus = document.getElementById("cargoStatus");
      cargoStatus.innerText = "There is too much mass";
      
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerText = "Shuttle not ready for launch.";
      launchStatus.style.color = "red";
      event.preventDefault();
    
    } else {
      let launchStatus = document.getElementById("launchStatus");
      launchStatus.innerText = "Shuttle is ready for launch.";
      launchStatus.style.color = "green";
      event.preventDefault();
    }
  });
});
