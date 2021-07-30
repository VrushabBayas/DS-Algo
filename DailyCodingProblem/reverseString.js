//using predefiend function
function reverseString(str) {
  return str || typeof str === "string" || str.length > 2
    ? str.split("").reverse().join("")
    : "str is undefiend";
}
//using raw code
function reverseString2(str) {
  if (!str || typeof str !== "string" || str.length < 2)
    return "not valid string";

  let strLength = str.length - 1;
  let resultArray = [];
  let result = "";
  for (let index = strLength; index >= 0; index--) {
    const element = str[index];
    resultArray.push(element);
  }
  for (let index = 0; index < resultArray.length; index++) {
    const element = resultArray[index];
    result += element;
  }
  return result;
}
let result = reverseString2("My name is vrushabh");
// let result1 = reverseString("r");
console.log("result: ", result);
// console.log("result: ", result1);
