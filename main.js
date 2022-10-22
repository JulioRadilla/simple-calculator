//Global Variables
let total = 0;
let num1 = '';
let num2 = '';
let operator = '';
let display = '';

// Event Listener for  click zone 
document.querySelector('#clickZone').addEventListener('click',displayCalc);
//Event listener for numbers buttons
document.querySelector('#zero').addEventListener('click',zero);
document.querySelector('#one').addEventListener('click',one);
document.querySelector('#two').addEventListener('click',two);
document.querySelector('#three').addEventListener('click',three);
//Event listener for operators
document.querySelector('#plus').addEventListener('click',plus);
document.querySelector('#minus').addEventListener('click',minus);
document.querySelector('#multiply').addEventListener('click',multiply);
document.querySelector('#divide').addEventListener('click',divide);
document.querySelector('#equals').addEventListener('click',equals);
// Functions for the event listener to do for each button and click zone
function zero(){
    num1 = 0;
}

function one(){
    if(operator == ''){
        num1 += '1';
    } else {
        num2 = num2 + '1';
      }
    

}

function plus(){
    operator = '+';
}

function minus(){
    operator = '-';
}

function multiply(){
    operator = '*';
}

function divide(){
    operator = '/';
}


function displayCalc(){
    display = num1 + '' + operator + '' + num2;

 document.querySelector('#placeToPutEquation').innerText = display;
}

function equals(){
    //Quick shorthand to make a string into a number
    num1 = (+num1)
    num2 = (+num2)
    if ( operator === '+'){
        total = num1 + num2;
    } else if (operator === '-'){
        total = num1 - num2;
    } else if (operator === '*'){
        total = num1 * num2;
    } else if (operator === '/'){
        total = num1 / num2;
    } else {
        total = 'I think you forgot something';
    }
    document.querySelector('#placeToPutResult').innerText = total;
}

function clear(){
    total = 0;
    num1 = '';
    num2 = '';
    operator = '';
    document.querySelector('#placeToPutEquation').innerText = '0';
    document.querySelector('#placeToPutResult').innerText = '0';
}
