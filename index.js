
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

let fruts = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    function game2 (){
        fruts = fruts.sort(() => Math.random() - 0.5);
        alert(fruts.join(', '));
let userInput1 = prompt('Чему равнялся первый элемент массива?');
let userInput2 = prompt('Чему равнялся последний элемент массива?');
if (fruts[0].toLowerCase() === userInput1.toLowerCase() && fruts[fruts.length - 1].toLowerCase() === userInput2.toLowerCase()) {
    alert("Все верно. У вас хорошая память!")
    } else {
    alert("Вы не угадали! Попробуйте еще раз.");
    }
    }