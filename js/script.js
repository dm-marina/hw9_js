const age=prompt("Введи свой возраст:");
const city = prompt("В каком городе ты живешь?");
const sport = prompt("Напиши свой любимый вид спорта:")
switch(age){
    case age:
        {
            let userAge
        }
        userAge = `Твой возраст ${age}`
        alert(userAge);
        break;
    case '':
        {
            let userAge
        }
        userAge = 'Жаль, что ты не зохотел ввести свой возраст'
        alert(userAge);
        break;
}
// age >=0 ? `Твой возраст ${age}` : 'Жаль, что ты не зохотел ввести свой возраст'
switch(city){
    case 'Киев':{
        let country
    }
        country = 'Ты живешь в столице Украины';
        alert(country);
        break;
    case 'Москва':{
        let country
    }
        country = 'Ты живешь в столице Росии';
        alert(country);
        break;
    case 'Минск':{
        let country
    }
        country = 'Ты живешь в столице Беларуси';
        alert(country);
        break;
    case '':{let country}
        country='Жаль, что ты не зохотел ввести свой город';
        alert(country);
        break
    default:{let country}
        country =`Ты живешь в городе ${city}`
        alert(country);
        break
}
switch(sport){
    case 'бокс':{
        let sportsmenName
    }
    sportsmenName='Круто! Хочешь стать Майком Тайсоном?'
    alert(sportsmenName);
    break;
    case 'футбол':{
        let sportsmenName
    }
    sportsmenName='Круто! Хочешь стать Криштиану Роналду?'
    alert(sportsmenName);
    break;
    case 'плавание':{
        let sportsmenName
    }
    sportsmenName='Круто! Хочешь стать Мэттью Бионди?'
    alert(sportsmenName);
    break
    case '':{
        let sportsmenName
    }
    sportsmenName= 'Жаль, что ты не зохотел ввести любимый вид спорта'
    alert(sportsmenName);
    break;
    default:{
        let sportsmenName
    }
    sportsmenName = `Твой любимый вид спорта это ${sport}`
    alert(sportsmenName);
}
