let array1 = ["v", "b", 1, "5"];
let array2 = ["x", "a", "f", 0];

const getMappings = (array) => {
  let result = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result[element] = true;
  }
  return result;
};

const findCommon = () => {
  for (let i = 0; i < array1.length; i++) {
    const element1 = array1[i];
    for (let j = 0; j < array2.length; j++) {
      const element2 = array2[j];
      if (element1 === element2) {
        return true;
      }
    }
  }
  return false;
};

let res = findCommon();
console.log("res: ", res);

const findCommonItem = () => {
  let result1 = getMappings(array1);
  array2.forEach((item) => {
    if (result1[item]) return true;
  });
  return false;
};

let res3 = findCommon2();
console.log("res3: ", res3);
// The javascript way of doing it
const findcommonIte4 = () => array1.some((value) => array2.includes(value));
const res4 = findcommonIte4();
console.log("res4: ", res4);
