/*1 не работает*/
/* const arr = [2, 5, 10, 200, 50, 30, 5];

const result (arra, callback) => {
    Math.round(callback());
    console.log(Math.round(callback));
}

let sum () =>{
    massiv.arr(i=>x+=i, x=0).reverse()[0];
}

let mult () => {
    arr.reduce((a,b)=>a*b);
}

getResult(arr, sum);
getResult(arr, mult);

/*2*/
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];

users.sort((a,b) => a.age - b.age);

console.log(users);

/*3 да что не так???*/
/*const arr = [3, 4, 5, 5, 6, 'two', 74];

let each(arra, callback) => {
callback(arra);
}

const reversArr(arr) => {
    arr.reverse();
}

const toNumberArr (arr) => {
    for(i=0; i < length.arr; i++){
        if(isNaN(+i)){
            delete arr[i];
        }
    }
}

console.log(each(arr, reversArr));
console.log(each(arr, toNumberArr));

/*4 а вот тут получилось*/
const timer = (deadline) => {

    let time = deadline;
    const interval = setInterval(() => {
        time -= 3;
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, deadline * 1000)
};


timer(30000);

/*5*/
function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(() => {
        console.log('Идут гудки...')
    }, 1000);
}

function talk() {
    setTimeout(() => {
    console.log('Разговор')
}, 2000);
}

calling();
beeps();
talk();
