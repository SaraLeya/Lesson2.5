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
let numer = '32.58884';
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));
