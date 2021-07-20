// Given an even number (greater than 2 ),
// print two prime numbers whose sum will be equal to given number.
// There may be several combinations possible.
// Print only first such pair.

// output 3 5

// Input: n = 74
// Output: 3 71

// Input : n = 1024
// Output: 3 1021

// Input: n = 66
// Output: 5 61
1.5;
3;
2, 3;

const isPrime = (number) => {
  for (let index = 2; index <= number / 2; index++) {
    if (number % index === 0) return false;
  }
  return true;
};
const getPrimeNumbers = (num) => {
  let primeArray = [];
  for (let index = 2; index <= num; index++) {
    if (isPrime(index)) {
      primeArray.push(index);
    }
  }
  return primeArray;
};
//result in O(n^2)
const getPrimeWithSum = (num) => {
  let primeArray = getPrimeNumbers(num);
  for (let index = 0; index < primeArray.length; index++) {
    const element1 = primeArray[index];
    for (let index2 = 0; index2 < primeArray.length; index2++) {
      const element2 = primeArray[index2];
      let result = element1 + element2;
      if (result === num) {
        return `${element1} ${element2}`;
      }
    }
  }
};
const isPrimeArray = (number) => {
  let isPrimNumbersArray = [];
  for (let index = 1; index <= number; index++) {
    if (isPrime(index)) isPrimNumbersArray.push(false);
    else isPrimNumbersArray.push(true);
  }
  return isPrimNumbersArray;
};
//result in O(n)
// input 8  , [1,2,3,4,5,6,7,8]->
// 1(composit ,not prime)+7=8,
// 2+6(not prime)=8
// 3(prime)+5(prime)=8(result)
const getPrimeWithSum2 = (num) => {
  let primeArray = isPrimeArray(num);
  for (let index = 0; index < num; index++) {
    if (primeArray[index] && primeArray[num - index]) {
      return `${index} ${num - index}`;
    }
  }
};

let res1 = getPrimeWithSum2(8);
console.log("res1: ", res1);
// let res2 = getPrimeWithSum2(1024);
// console.log("res2: ", res2);
// let res3 = getPrimeWithSum(456);
// console.log("res3: ", res3);
// let res4 = getPrimeWithSum(66);
// console.log("res4: ", res4);
