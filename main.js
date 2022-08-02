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

const operate = (num1, operator, num2) => {
    switch(operator) {
        case '+':
            return add(num1, num2);
        break;
        case '-':
            return subtract(num1, num2);
        break;
        case 'x':
            return multiply(num1, num2);
        break;
        case '÷':
            return divide(num1, num2);
        break;
    }
}

console.log(operate(3,'x', 5))


//Populate Display

const buttons = document.querySelectorAll('.display-button');
const display = document.querySelector('.screen');
let arr =[];
let str = '';
let finalArr;

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if(button.id === "ok"){
            display.textContent += button.textContent;
            //console.log(display.textContent)
            arr =[]
            arr.push(display.textContent)

            console.log(arr)
        } else if (button.id === "clear"){
            display.textContent = "";
            
        } else if (button.id === "equal"){
            str = arr.toString();
            finalArr = str.split(" ")
            display.textContent = operate(finalArr[0], finalArr[1], finalArr[2]);
            console.log('hello')
        } //else if (button.id === "neg"){
           // console.log('hello');
            //let neg = display.textContent;
            //console.log(display.textContent)
            //console.log(neg)
            //console.log(neg[0])
            ////display.textContent = neg[0] * -1;
        //}
        
        }///event listener bracket
   )} ///for each bracker 
);//for each parethsis


/*eval.addEventListener('click', ()=>{
    populateScreen()
})
*/
