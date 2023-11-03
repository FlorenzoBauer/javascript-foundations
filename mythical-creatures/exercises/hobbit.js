function createHobbit(name, age, relationship){
  var hobbit = {
  name : name,
  age : age,
  acquaintances: [],
  relationship: relationship,
    
  
  
  } 
  if(!age && !name){
    hobbit['age'] = 0;
    hobbit['name'] = 'unknown';
  }
  else if (!age){
    hobbit['age'] = 0;
  } 
  if (age <= 32){
    hobbit['isAdult'] = false
  }
  else if (age > 32){
    hobbit['isAdult'] = true;
  }
  if (age >= 101){
    hobbit['isOld'] = true
  }
  else if (age < 101){
    hobbit['isOld'] = false;
  }
return hobbit
}    
function celebrateBirthday(hobbit){
  hobbit['age'] += 1;
if (hobbit['age'] > 32){
    hobbit['isAdult'] = true;
  }
  if (hobbit['age'] >= 101 ){
    hobbit['isOld'] = true;
  }
  return hobbit
}
function getRing(hobbit) {
  if (hobbit.name === `Frodo`){
    return 'Here is the ring!'
  }
  return `You can\'t have it!`
}

function meetPeople(hobbit, people){
  for (var i = 0; i < people.length; i++ ){

    hobbit.acquaintances.push(people[i]);
  }

return hobbit
}

function findFriends(hobbit){
  var aqua = hobbit.acquaintances;
  var friend = [];
  for (var i = 0; i < aqua.length; i++){
    if (aqua[i].relationship === `friend`){
    friend.push(aqua[i].name);
  }
}
return friend
}
module.exports = {
   createHobbit, 
   celebrateBirthday, 
   getRing, 
   meetPeople, 
  findFriends
}