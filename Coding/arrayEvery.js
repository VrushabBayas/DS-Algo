const isBelowthreShold = (value) => value < 40;
const array1 = [1, 30, 19, 29, 10, 13];

let result = array1.every(isBelowthreShold);
console.log("result: ", result);
