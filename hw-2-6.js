/*1*/
const h = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < h.length; i++) {
    console.log(h[i]);
    if (h[i] === 10) break;
}

/*2*/
const g = [1, 5, 4, 10, 0, 3];
let gic = g.indexOf('4');
console.log(gic);

/*3*/
const her = [1, 3, 5, 10, 20];

her = her.join(' ');

console.log(her);

/*4*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const arrA = [];
  const arrB = [];

  for(let i = 0; i < 10; i++){
    arrA.push(getRandomInt(0, 10));
  }


for(let item of arrA){
    let h = item % 2;
    if(h == 0){
        arrB.push(item);
    }
}

arrA.forEach(el, index) => {
    console.log(`${index} : ${el}`);
}

arrB.forEach(el, index) => {
    console.log(`${index} : ${el}`);
}

/*5*/
const sara = [];
for (let i = 0; i < 3; i++){
    sara[i] = [];

    for (let r = 0; r < 3; r++) {
        sara[i].push(1);
    }
}

console.log(sara);

/*6*/

const rid = [1, 1, 1];

rid.push('2', '2', '2');
console.log(rid);

/*7*/
const pig = [9, 8, 7, 'a', 6, 5];

pig = pig.sort();

console.log(pig.shift());

console.log(pig);

/*8*/
const rud = [9, 8, 7, 6, 5];

let e = prompt("Введите число от 1 до 10");

let search = rud.includes(e);

if (search == e) {
    console.log(true);
} else {
    console.log(false);
}

/*9*/
const absdef = "absdef";
const leya = absdef.split('');

leya.reverse();

console.log(leya.join(''));


/*10 не поняла, как с циклом for, но поняла с функцией как*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const arrS = [];

for(let i = 0; i < 6; i++){
    arrS.push(getRandomInt(0, 10));
  }
 let sum = 0;

  for(let item of arrS){
   sum += item;
  }

  console.log(sum / arrS.length);

    /*11 flat*/
const pir = [
    [1, 2, 3,],
    [4, 5, 6]
];

console.log(pir.flat());

/*12*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
 
  const great = [];
  
  for (let i = 0; i < 10; i++){
    great.push(getRandomInt(0, 10));
  }


for(i = 0; i < great.length - 1; i++){
console.log(great[i] + great[i++]);
}