/* Координаты корабля, нужно сделать массив! */
var location1 = Math.floor(Math.random()*5+1);
var location2 = location1+1;
var location3 = location1+2;

var guess; // номер текущей попытки
var hits = 0; // количество попаданий
var guesses = 0 // общее количество попыток
var isSunk = false // корабль потоплен?
const SHIP_LENGTH = 3;

while(!isSunk) {
	guess = prompt('Введите координаты выстрела 1-7(целое число)');
	if(guess==null){
		alert('Выход из игры');
		break;
	} else if(guess % 1 != 0 || guess > 7 || guess < 1 || isNaN(guess)){
		alert('Введенные координаты не корректны, введите верные координаты!');
	} else {
		guess = Number(guess);
		guesses++;
		switch (guess){
			case location1:
				alert('Вы попали в цель!');
				hits++;
				location1 = 0;
				break;
			case location2:
				alert('Вы попали в цель!');
				hits++;
				location2 = 0;
				break;
			case location3:
				alert('Вы попали в цель!');
				hits++;
				location3 = 0;
				break;
			default:
				alert('Вы промазали. Попробуйте еще раз.');
		}
	}
	if (hits == 3){
		isSunk = true;
		var accuracy = SHIP_LENGTH/guesses*100; // точность выстрелов
		document.write('Корабль потоплен! Количество выстрелов: ' + guesses + '. Выша точность: ' + accuracy.toFixed() + '%.');
	}
}



