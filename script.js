var name = prompt("Как тебя зовут?");

if (name == '') {
    alert("Ну раз не говоришь своё имя, буду звать тебя Васей.");
} else {
    alert("Привет, " + name + ". Красивое имя");
} 



var age = +prompt("Сколько тебе лет?");

if (age == '') {
    alert("Да, склероз бич двадцатого века.");
} 
else if ( 1 <= age && age <= 10) {
    alert("Эх, совсем зелёный.");
} 
else if ( 11 <= age && age <= 16) {
    alert("Вездесущая школота.");
} 
else if ( 17 <= age && age <= 21) {
    alert("Мелковат фрукт.");
}
else if ( 22 <= age && age <= 35) {
    alert("О, вполне взрослый мужчина.");
} 
else if ( 36 <= age && age <= 50) {
    alert("Нет, чернослив не по мне.");
} 
else if ( 51 <= age && age <= 100) {
    alert("Дедушка, и вы туда-же.");
} 
else if ( 101 <= age && age <= 149) {
    alert("Ни фига себе Тутанхамон.");
} 
else if ( age <= 0 || age >= 150) {
    alert("Что за ерунда. Тебя либо ещё нет, либо уже нет.");
}


var anegdot = prompt("Хочешь расскажу анекдот?");

if ( anegdot == 'yes' || anegdot == 'true' || anegdot == 'да' || anegdot == 'Yes' || anegdot == 'True' || anegdot == 'Да' ) {
    alert("Ну слушай.");
} else if ( anegdot == 'no' || anegdot == 'false' || anegdot == 'нет' || anegdot == 'No' || anegdot == 'False' || anegdot == 'Нет' ) {
    alert("А я всё равно расскажу!");
}



var badQuest = prompt('О мертвых либо ничего, либо хорошо. Например: "Он умер, и это хорошо".');

if ( badQuest == 'yes' || badQuest == 'true' || badQuest == 'да' || badQuest == 'Yes' || badQuest == 'True' || badQuest == 'Да' ) {
    alert("Ну пока, спишемся.");
} else if ( badQuest == 'no' || badQuest == 'false' || badQuest == 'нет' || badQuest == 'No' || badQuest == 'False' || badQuest == 'Нет' ) {
    alert('Ох какие мы нежные, такие "неженки" не для меня');
}
