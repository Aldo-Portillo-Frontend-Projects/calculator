//Add:

const add = function(a,b) {
	return a+b;
};
console.log(add(2,3))

//Subtract:

const subtract = function(a,b) {
	return a-b;
};
console.log(subtract(10,6))

//Multiply:

const multiply = function(a,b) {
	return a * b;
};
console.log(multiply(10,6))

//Divide

const divide = function(a,b) {
	return a / b;
};
console.log(divide(10,5))


//Operate Function

const operate = (operator, num1, num2) => {
    switch(operator) {
        case '+':
            return add(num1, num2);
        break;
        case '-':
            return subtract(num1, num2);
        break;
        case '*':
            return multiply(num1, num2);
        break;
        case '/':
            return divide(num1, num2);
        break;
    }
}

console.log(operate('-', 3, 5))


//Populate Display

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.screen');
let arith = []
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        display.textContent += `${button.innerHTML}`
        arith.push(display.textContent);
    });
  });

console.log(arith)



