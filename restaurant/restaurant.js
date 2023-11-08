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

function createOrder(object){
  var order = {
    tableNumber: object.name,
    meals: object.meals,
    completedMeals: [],
  }
  return order
}

function cookMeal(order, meal){
  if (order.tableNumber === meal.tableNumber){
    order.completedMeals.push(meal.name);
  }
  return order;
}

function listOrders(order){
  console.log(order)
  var orderNames = []
  var list = order.meals.map(meals => meals.name)
  for(let meals of list){
    orderNames.push(meals)
  }
  return orderNames
}

function listSpecialRequests(order){
  var listSpecialRequests = [];
  var sR =  order.meals.map( meals=> meals.specialRequests)
  for (let meals of sR){
    listSpecialRequests.push(meals)
  }
}
module.exports = { 
   createMeal, 
   getMade, 
   announceMeal,
   createOrder, 
   cookMeal, 
   listOrders, 
   listSpecialRequests
}
