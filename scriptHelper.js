// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */

                let missionTarget = document.getElementById("missionTarget"); 
                missionTarget.innerHTML`<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src= ${imageUrl}>`
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    } else if (isNAN(testInput)) {
    return "Not a Number";
    } else if (testInput(!isNAN(testInput))) {
    return "Is a Number";
    }
}

    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    document.getElementById("pilotStatus").innerHTML=`Pilot ${pilot.value} is ready for launch.`;
    document.getElementById("copilotStatus").innerHTML=`Copilot ${copilot.value} is ready for launch.`;
    
    if(validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number")
    return window.alert("Enter a valid format for each field!"); 

 else if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too great for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
    launchStatus.style.color = "red";
    return "Error";
} else if (fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
    launchStatus.style.color = "red";
    return "Error";
} else if (cargoLevel.value > 10000) {
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too great for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch.";
    launchStatus.style.color = "red";
    return "Error";
} else {
    list.style.visibility = "hidden";
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = "Shuttle Ready for Launch!"
    launchStatus.style.color = "green";
    return missionTarget;
}

};
   

async function myFetch() {
    
    let planetsReturned;
planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(planetsResponse) {
    return planetsResponse.json();
    });

return planetsReturned;
}
/*it("Student selects planet at random", function() {
    expect(studentPlanet.includes("Math.random()")).toBeTrue;
    expect(planetsResponse.includes(studentFunctions.pickPlanet(planetsResponse))).toBeTrue();
})*/

function pickPlanet(planets) {
let choice = Math.floor(Math.random()*planets.length);
return planets[choice];
}

function pickPlanet(planets) {
  
        let planets = ["Tatooine", "Pern", "Saturn/Titan", "Mars", "K2-18b", "Jupiter/Europa"]
        let anyPlanet = Math.random(planets);
        console.log(anyPlanet);
    
} 

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
