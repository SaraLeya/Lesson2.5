/*Задание 6*/

 let shit = () =>{
    let n = Number(prompt('Введите число'));
    if (n === NaN || n === undefined) {
        let n = n**3;
        alert(`n в кубе равняется ${f}`);
    } else {
        alert('Переданный параметр не является числом');
    }
 }

 shit();

/*Задание 5*/

let red = (num3, num4) =>{
    num3 = Number(num3);
    num4 = Number(num4);
if (num3 === NaN || num3 === undefined|| num4 === NaN || num4 === undefined){
    console.log('Одно или оба значения не являются числом');
} else {
let result = num3*num4;
console.log(result);
}
}

red(2,3);

/*Задание 4*/
let age = (zero, twel) => {
    let userAnswer = prompt ('Сколько Вам лет?');
if (userAnswer < 0) {
    alert('Вы ввели неправильное значение');
} else if (userAnswer <== 12) {
    alert('Привет, друг!');
} else {
    alert('Добро пожаловать!');
}
}

age(0, 12);

/*Задание 3*/
/*Задание 3.1. */
let squaring = (num1) => num1**2;

console.log(squaring(2));

/*3.2. */
let squaring = (number1) => {
    let result = number1**2;
    return result;
} 

let q = squaring(number1);
console.log(q);

/*Задание 2*/

let EvenNumber =(n) => {
    if ( n % 2 == 0){
        alert(`Число четное`);
    } else{
        alert(`Число нечетное`);
    }
}

EvenNumber(4);

/*Задание 1*/

let bigest =(a,b) => {
    if ( a > b){
        alert(b);
    } else{
        alert(a);
    }
}

bigest(7, 2);

/*Задание 7*/
function game1 (){
    let monthNumber = prompt('Введите число месяца');
    switch (monthNumber) {
        case '1':
        case '2':
        case '12':
            alert('зима');
            break;
        case '3':
        case '4':
        case '5':
            alert('весна');
            break;
        case '6':
        case '7':
        case '8':
            alert('лето');
            break;
        case '9':
        case '10':
        case '11':
            alert('осень');
            break;
        default: alert('Нет такого');
    }
    }