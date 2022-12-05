
if (0) {
	console.log('Брехня');
	} else if (" ") {
	console.log('Іcтина');
	}

	// від 0 до 5
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}

// переписати на while

let numm = 0;
	while (numm < 3) {
		console.log(`Число: ${numm}`)
		numm++
	}

// Задача 4
/*
firstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (size==1) {
			break firstFor;
		}
		console.log(size);
	}
} 
*/
// числа. 

// задача 1
let numOne = 1.005 + Number.EPSILON;
let numb = Math.round (numOne * 100) / 100;
console.log (numb);

// задача 2
let value = parseFloat("135.58px");
console.log(value);

//задача 3
let values = 58 + "Фрілансер";
if (isNaN(values)) {
	console.log('Результат NaN');
}

// задача 4
console.log(Math.max(10,58,39,-150,0))

//задача 5
console.log(Math.floor(58.858))

//рядок
// Задача 2 отримати символ "н" з рядка фрілансер
let word = 'фрілансер';
let symbol = word[5];
console.log(symbol);

// Задача 4 рядок в верхньому регістрі
let wordUpper = "фрілансер";
console.log(wordUpper.toUpperCase());

// Задача 5 отримати підстроку лан

let words = "фрілансер";
console.log(words.slice(3,6));