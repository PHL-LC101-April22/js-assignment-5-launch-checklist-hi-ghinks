// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilot = document.querySelector(input[this.name=pilot]);
        let copilot = document.querySelector(input[this.name=copilot]);
        let fuelLevel = document.querySelector(input[this.name=fuelLevel]);
        let cargoMass = document.querySelector(input[this.name=cargoMass]);
    })


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   let planet = pickPlanet(listedPlanets);
   console.log(planet);
   addDestinationInfo(planet.document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageURL);
   
});