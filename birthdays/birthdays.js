function createBirthday(name, month, day){
    var birthday = {
        name: name,
        month: month,
        day, day,
    }
    return birthday
}

function celebrateBirthday(birthday){

   

    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdays, month){

    var mth = []
    for (i = 0; i < birthdays.length; i++){
        if(birthdays[i].month == month){
            mth.push(birthdays[i].month)
        }
    }
    return mth.length
}
module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays
 };