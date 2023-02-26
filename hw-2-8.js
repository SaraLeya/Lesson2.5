/*1*/
const arr = [2, 5, 10, 200, 50, 30, 5];

const result = (arra, callback) => {
    return Math.round(callback(arr));
}

const sum = () =>
    arr.reduce((product, element) => product + element);

let mult = () =>
    arr.reduce((product, element) => product * element);


console.log(result(arr, sum));
console.log(result(arr, mult));

/*2*/
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);

/*3 попытка номер 2 провалилась*/
const arr2 = [3, 4, 5, 5, 6, 'two', 74];

const each = (arr2, callback) => callback(arr2);

const reversArr = () => arr2.reverse();

const toNumberArr = () => {
    for (i = 0; i < length.arr2; i++) {
        if (isNaN(+i)) {
            delete arr2[i];
        }
    }
}

console.log(each(arr2, reversArr));
console.log(each(arr2, toNumberArr));

/*4*/
function date() {
    const interval = setInterval(() => {
      console.log(new Date());
    }, 3000);
    setTimeout(() => {
      clearInterval(interval);
      console.log("30 секунд прошло");
    }, 30000);
  }
  
  date();


/*5*/

function beeps() {
    setTimeout(() => {
        console.log('Идут гудки...')
    }, 1000);
}


function call (callback) {
    console.log('Звоню!');
    callback();
    console.log('Разговор');
}

call(beeps);