/*1 */
const line = 'AfjhdEnfjbgWWWWWw';
console.log(line.toUpperCase());

/*2 */

const life = ['мыло', 'веревка', 'револьвер', 'снотворное', 'нервы', 'Ненависть', 'депреССия', 'агония', 'апатия', 'рефлексия'];

const search = 'не';
const result = [];
function sos (life, search){
    for(let item of life){
        if(item.toLowerCase().startsWith(search.toLowerCase())){
            result.push(item);
        }
    }  
}

sos(life, search);

console.log(result);

/*3*/
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

/*4*/
let arr = [52, 53, 49, 77, 21, 32];
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));

/*5*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function trh () {
console.log(getRandomInt(0, 10))
}

trh();


/*8*/
let curDate = new Date();
console.log(curDate);

/*9*/
let currectDate = new Date();

currectDate.setDate(currectDate.getDate() + 73);

console.log(currectDate)

/*10*/
function formatDate(date) {
    const locale = 'ru-RU'
    return `Дата: ${date.toLocaleString(locale, {day: 'numeric', month: 'long', year: 'numeric'})} - это ${date.toLocaleString(locale, {weekday: 'long'})}.
 Время: ${date.toLocaleTimeString(locale)}`
 }
 console.log(formatDate(new Date()));
 
/*const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); 

myDate.setDate(15); 
myDate.setMonth(1); 
myDate.setYear(2023); 
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

console.log(fullDate); 

/*6*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  st = Math.round(prompt('num'));
  const mas = [];
  function flag (st) {
for(i = 0; i < Math.floor(st / 2); i++){
    mas.push(getRandomInt(0, st));
}
}

flag(st);

console.log(mas);

/*7*/

function getRandomNum(a, b) {
    let randNum = Math.round(Math.random() * (b - a)) + a;
    return randNum;
}

console.log(getRandomNum(1, 5));
