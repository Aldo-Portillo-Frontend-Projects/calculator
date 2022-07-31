const add = function(a,b) {
	return a+b;
};
console.log(add(2,3))
const subtract = function(a,b) {
	return a-b;
};
console.log(subtract(10,6))
const sum = function(arr) {
	const sum = arr.reduce((currentValue, accumulator)=>{
    return currentValue += accumulator;
  },0)
  return sum;
};
console.log(sum([1,3,5,7,9]))
const multiply = function(arr) {
  const multiply = arr.reduce((currentValue, accumulator)=>{
    return currentValue *= accumulator
  },1)
  return multiply;
};

console.log(multiply([2,4]))
console.log(multiply([2,4,6,8,10,12,14]));

const power = function(a, b) {
	return a**b;
};

console.log(power(4,3))

const factorial = function(num) {
  let result = num;
	while(num > 1){
    num--;
    result *= num;
  }
  if (result === 0){
    return 1;
  } else {
    return result;
  }
  
};