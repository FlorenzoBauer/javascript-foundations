function createMaterial(name, unit, costPerUnit){
  return {
    name: name,
    unit: unit,
    costPerUnit: costPerUnit,
  }
}

function calculateMaterialCost(material, amount){
  material.costPerUnit *= amount

  return `${amount} ${material.unit}s of ${material.name} costs $${material.costPerUnit}.`

}

function createSupplyCloset(supplies){
  if (!supplies){
    return {
      supplies: supplies = [],
    }
  }
  
  return {
    supplies: supplies.map(supply => supply.name),
  }
}

function addSupply(closet, supply){ 
  
  if (closet.supplies.includes(supply.name)){
    return `You already have ${supply.name} in your closet!`
  } 
  else{
    closet.supplies.push(supply.name)
  }
  return closet.supplies
}

function createNewProject(materials, status){
  if (!status){
    status = `not started`
  }
  return {
    materialsNeeded: materials,
    status: status,
    }

}

function compareMaterials(project, closet){
  var projectMaterials = project.materialsNeeded.map(material => material.name);
  for (let material of projectMaterials) {
    console.log(projectMaterials)
    if (!closet.supplies.includes(material)) {
      return `Oh no! You need to go shopping before you can start this project!`;
    }
  }
  return `Yay! You can start this project!`;
}
module.exports = {
   createMaterial,
   calculateMaterialCost,
   createSupplyCloset,
   addSupply,
   createNewProject,
   compareMaterials
}