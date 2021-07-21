// Given a list of numbers and a number k,
// return whether any two numbers from the list add up to k.

// example, given [10, 15, 3, 7] and k of 17,
//  return true since 10 + 7 is 17.

const getSum = (array = [], k) => {
  if (array.length == 0 && k) return "Invalid arguments";
  for (let index1 = 0; index1 < array.length; index1++) {
    const num1 = array[index1];
    for (let index2 = 0; index2 < array.length; index2++) {
      const num2 = array[index2];
      if (num1 + num2 === k) {
        return `${num1} ${num2}`;
      }
    }
  }
  return false;
};

const createMapping = (array) => {
  let result = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result[element] = element;
  }
  return result;
};
const getSum2 = (array = [], k) => {
  let length = array.length;
  let mapping = createMapping(array);
  console.log("mapping: ", mapping);
  if (array.length == 0 && k) return "Invalid arguments";
  for (let index1 = 0; index1 < length; index1++) {
    const num1 = array[index1];
    const temp = k - num1;
    if (mapping[temp]) {
      if (num1 + temp === k) {
        return `${num1} ${temp}`;
      }
    }
  }
  return false;
};

const result = getSum2([15, 7, 3, 12, 5], 17);
console.log("result: ", result);
