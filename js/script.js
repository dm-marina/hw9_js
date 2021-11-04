const age=prompt("Введи свой возраст:");
const city = prompt("В каком городе ты живешь?");
const sport = prompt("Напиши свой любимый вид спорта:")
let userAge;
let country;
let sportsmenName;
switch(age){
    case age:
        userAge = `Твой возраст ${age}`
        alert(userAge);
        break;
    case '':
        userAge = 'Жаль, что ты не зохотел ввести свой возраст'
        alert(userAge);
        break;
}
// age >=0 ? `Твой возраст ${age}` : 'Жаль, что ты не зохотел ввести свой возраст'
switch(city){
    case 'Киев':
        country = 'Ты живешь в столице Украины';
        alert(country);
        break;
    case 'Москва':
        country = 'Ты живешь в столице Росии';
        alert(country);
        break;
    case 'Минск':
        country = 'Ты живешь в столице Беларуси';
        alert(country);
        break;
    case '':
        country='Жаль, что ты не зохотел ввести свой город';
        alert(country);
        break
    default:
        country =`Ты живешь в городе ${city}`
        alert(country);
        break
}
switch(sport){
    case 'бокс':
    sportsmenName='Круто! Хочешь стать Майком Тайсоном?'
    alert(sportsmenName);
    break;
    case 'футбол':
    sportsmenName='Круто! Хочешь стать Криштиану Роналду?'
    alert(sportsmenName);
    break;
    case 'плавание':
    sportsmenName='Круто! Хочешь стать Мэттью Бионди?'
    alert(sportsmenName);
    break
    case '':
    sportsmenName= 'Жаль, что ты не зохотел ввести любимый вид спорта'
    alert(sportsmenName);
    break;
    default:
    sportsmenName = `Твой любимый вид спорта это ${sport}`
    alert(sportsmenName);
}
