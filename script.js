"use strict";


// twoSum
function twoSum(numbers, target) {
  let num;
  let indexOne;
  let indexTwo;
  numbers.forEach((n1, i) => {
    num = n1;
    for (let n2 = i + 1; n2 < numbers.length; n2++) {
      if (num + numbers[n2] === target) {
        indexOne = i;
        indexTwo = n2;
      }
    }
  });
  return [indexOne, indexTwo]
}
console.log(twoSum([1, 2, 3], 4));

// Your order, please
function order(words) {
  let num;
  const convertToArr = words.split(" ");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];
  numbers.slice(0, convertToArr.length).find((n) => {
    num = n + "";
    for (let i = 0; i < convertToArr.length; i++) {
      if (convertToArr[i].includes(num)) {
        result.push(convertToArr[i]);
      }
    }
  });
  return result.join(' ');
}
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));


