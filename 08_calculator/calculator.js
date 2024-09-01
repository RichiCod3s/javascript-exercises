const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	const total = arr.reduce((sum, current) => sum + current, 0 );
  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((sum, current) => sum * current, 1);
  return total;
};
 
const power = function(x,y) {
	const p = Math.pow(x,y);
  return p;
};

const factorial = function(num) {
  result =1;
  for(i=1; i<=num; i++){
    result *=i;
  }

  return result;
};

console.log(factorial(2));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
