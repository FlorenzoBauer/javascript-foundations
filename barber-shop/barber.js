function createBarber(name, earnings, haircuts){
    var barber = {
        name:name,
        earnings: earnings || 0,
        haircuts: haircuts || [],
    }

    return barber
}

function giveCompliment(haircut){
    return `This ${haircut.style} looks great!`
}

function cutHair(barber, haircut){
    barber.earnings += haircut.price;
    barber.haircuts.push(haircut);
    return barber;
}

function listStyles(barber, hairLength){
    var hairStyles = [];
    for(i = 0; i < barber.haircuts.length; i++){
        if(barber.haircuts[i].hairLength == hairLength){
            hairStyles.push(barber.haircuts[i].style)
        }
    }
    return hairStyles
   
}
module.exports = { 
    createBarber,
    giveCompliment,
    cutHair,
    listStyles,
 };