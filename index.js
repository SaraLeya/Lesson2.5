/*1*/
let a = 'Hello';
let b = 'l';

function get(a, b) {
    let s = 0;
    a = a.split('');
    for (let i = 0; i < a.length; i++){
        if(a[i] == b){
            s++;
        }
    }
    console.log(s);
    return s;
}
get(a, b);

/*2*/
const arr = [1, 3, 4, 5, 6];

let result = arr.reduce(function(sum, current) {
    return sum + current ** 2;
  }, 0);
  
  console.log(result);

/*function my (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
sum += arr[i]**2;
    }
    console.log(sum);
    return sum;
    
}

console.log(my (arr)); 

/*3*/
let n = 111;
function sgre (n){
   let b = Math.sqrt(n);
    b = Number.isInteger (b);
if (b == true){
return n;
} else {
    n = Math.pow(Math.round(Math.sqrt(n)), 2);
    return n;
}
}
console.log(sgre (n));

/*4*/
const absdef = "absdef";
const leya = absdef.split('');

leya.reverse();

console.log(leya.join(''));

/*5 no*/
const ar = [];

let d = 'Я абсолютно тупая';

/*console.log(d);

d = d.split(' ');

console.log(d);

for (let i = 0; i <= d.length; i++){
    let k = d[i].length;
    k = String(k);
    let w = d[i] + k;
    ar.push(w);
}
console.log(ar);

/*function magic (d) {
    for (let i = 0; i <= d.length; i++){
    let h = String(d[i].length);
    d[i] = d[i] + h;
    return d[i];
}
console.log(d);
}

magic(d);

/*6*/
let prise = 1;
let mango = 7;

function mangoFree (prise, mango) {
    let free = Math.floor(mango / 3);
    let result = (mango - free) * prise;
    console.log(result);
}

mangoFree (prise, mango);

/*7*/
let time = 6;

function natan (time){
    let  hydrated = Math.floor(time * 0.5);
    console.log(hydrated);
}

natan (time);

/*8*/
const arr1 = [1, -4, 9, -16];
const arr2 = arr1.map(x => x * -1);

console.log(arr2);

/*9 no*/

let nn = prompt('yours number');

const arr4 = [];

function answer (arr4) {
    for (let h = 0; h > nn; h++){
        arr4.push(Math.pow(2, h));
    }

console.log(arr4);
}

answer (arr4, nn);
/*10*/
const array = [5, 1, 2, 6, 4];
const res = array.reduce((acc, rec) => acc * rec);

console.log(res);
