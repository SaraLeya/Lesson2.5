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
 
  const arr = [getRandomInt(0, 10)];

  const arrA = [];
  const arrB = [];

for(let item of arr){
    let h = arr[item] % 2;
    if(h == 0){
        arrA[arrA.length] = h;
    } else {
        arrB[arrB.length] = h;
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
  const gryd = [getRandomInt(0, 10)];
 
console.log(am / gryd.length);
  
const getAverage = (gryd) => {
    const sum = gryd.reduce((acc, gryd) => acc + gryd, 0);
    const length = gryd.length;
    return sum / length;
  };
  
  const gryd = [1, 2, 3, 4];
  console.log(getAverage(gryd));
   
    /*11 flat*/
const pir = [
    [1, 2, 3,],
    [4, 5, 6]
];

for (let pirIn of pir) {
    for (let element of pirIn) {
        console.log(element);
    }
}

/*12*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
 
  const great = [getRandomInt(0, 10)];
  
  for (let i = 0; i < great.length; i++){
   console.log(great[i]);
   console.log(great[i+1]);
  }

