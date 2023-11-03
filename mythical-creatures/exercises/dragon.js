function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true,
    fireBreather: false
  }
  
  if (temperment === 'aggressive'){
    dragon.fireBreather = true;
    return dragon
  }
return dragon
    
  }

  function greetRider(dragon){
    
return `Hi, ${dragon['rider']}!`
}
function eat(dragon){
  dragon.timesEaten += 1;
  
  if (dragon.timesEaten === 3){
    dragon.hungry = false
    return dragon
  }
return dragon

}

function findFireBreathers(allDragons){
  var fireBreathers = [];
  for (var i =0; i < allDragons.length; i++){
    if(allDragons[i].fireBreather === true){
      fireBreathers.push(allDragons[i])
    }
  }
  return fireBreathers
}
module.exports = {
   createDragon, 
   greetRider, 
   eat, 
   findFireBreathers
    }