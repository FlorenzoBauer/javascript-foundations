function createAirport(name, airlines, availableGates){
  return {
    name: name,
    airlines: airlines,
    availableGates: availableGates,
  }
}

function welcomeGuests(airport){
return `Welcome to ${airport.name}!`
}

function landPlanes(airport, landings){
  var gates = airport.availableGates;
  airport.availableGates -= landings;
  var newAirport = airport;
  newAirport.message = "";
  if(gates > landings){
    console.log(2)
    newAirport.message = `Success! Current availability is ${newAirport.availableGates}.`
  }
  else if (gates > landings){
    console.log(3)
    
    newAirport.message = `Oh no! Not enough gates available. Current overflow is 1.`
  }
  return newAirport
}

module.exports = { 
   createAirport, 
   welcomeGuests, 
   landPlanes, 
  // checkAirlineLocations
};
