function createVampire(name, pet){
  var vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0,
  }

  if (!pet){ 
  vampire["pet"] = `bat`
  }
  return vampire
}

function encounterDeliciousVictim(vampire){
  if (vampire["thirsty"] === false){
    return `No thanks, I am too full.`
  }
  return `I WANT TO SUCK YOUR BLOOD!`
}

function drink(vampire){
  if (vampire["thirsty"] = false){
    return vampire
  }
  
  if (vampire["ouncesDrank"] >= 50){
    vampire["thirsty"] = false;
    return vampire
  }
  
  vampire["ouncesDrank"] += 10;
  return vampire
}
 function inquirePlace(locations, place){
  if(locations.includes(place)){
    return `Yes, I have spent some time in ${place}.`
  }
  
  return `No, I have never been to ${place}.`
 }

 function findBatLovers(vampires){
  var batLover = [];
  for (var i=0; i < vampires.length; i++)
  if (vampires[i].pet === "bat"){
  batLover.push(vampires[i].name)
  }
  return  batLover
}
module.exports = {
 createVampire, 
 drink, 
 findBatLovers, 
 encounterDeliciousVictim, 
 inquirePlace
}