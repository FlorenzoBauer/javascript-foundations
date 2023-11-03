function createMeal(name, specialRequests, tableNumber){
  var food = {
    name : name,
    specialRequests: specialRequests,
    tableNumber: tableNumber,
    complete: false,
  }
  return food;
}

function getMade(food){
  food.complete = true;
  return food
}

function announceMeal(food){
  if(!food.complete){
    return `This ${food.name} is not completed yet`
  }
  return `Order up - ${food.name} for table ${food.tableNumber}!`
}

function createOrder(tableNumber,orders){
  var order = {};
  order.tableNumber = tableNumber;
  order.meals = orders;
  console.log(order.tableNumber)
  console.log(order.meals)
  return order
}
module.exports = { 
   createMeal, 
   getMade, 
   announceMeal,
   createOrder, 
  // cookMeal, 
  // listOrders, 
  // listSpecialRequests
}
