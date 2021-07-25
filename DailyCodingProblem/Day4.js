// Given an array of integers,
// find the first missing positive integer in linear time
// and constant space. In other words,
// find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.

//  example
// Input [3, 4, -1, 1]
// Output: 2

// Input [1, 2, 0]
// Output: 3

// Input:  [2, 3, 7, 6, 8, -1, -10, 15]
// Output: 1

// Input:  [2, 3, -7, 6, 8, 1, -10, 15 ]
// Output: 4

// Input: [1, 1, 0, -1, -2]
// Output: 2

const getMapping = (array) => {
  let obj = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    obj[element] = element;
  }
  return obj;
};
//O(n);
const findLowestMinimum1 = (array) => {
  let filterData = array.filter((item) => item > 0).sort((a, b) => a - b);
  let mappings = getMapping(filterData);
  for (let index = 1; index < filterData.length; index++) {
    if (!mappings[index]) {
      return index;
    }
  }
  for (let index = 0; index < filterData.length; index++) {
    const element = filterData[index];
    if(element!==filterData[index+1]-1){
      return element+1;
    }
  }
};
// let res1 = findLowestMinimum1([3, 4, -1, 1]);//op=>2
// let res2 = findLowestMinimum1([1, 2, 0]); //op=>3
// let res3 = findLowestMinimum1([2, 3, 7, 6, 8, -1, -10, 15]);//op=>1
// let res4 = findLowestMinimum1([2, 3, -7, 6, 8, 1, -10, 15]);//=>4
// let res5 = findLowestMinimum1([1, 1, 0, -1, -2]);//op=>2

// console.log("res: ", res1);
// console.log("res: ", res2);
// console.log("res: ", res3);
// console.log("res: ", res4);
// console.log('res5: ', res5);

//O(nlogn) using sorting

const findLowestMinimum2 = (array) => {
  let filterData = array.filter((item) => item > 0).sort((a, b) => a - b);
  let res,index=0,counter=1;
  while(res==null&&index<=filterData.length){
    if(filterData[index]!==counter){
      res=counter
    }
    index++;
    counter++;
  }
  return res;
};
// let res1 = findLowestMinimum2([3, 4, -1, 1]);//op=>2
let res2 = findLowestMinimum2([1, 2, 0]); //op=>3
let res3 = findLowestMinimum2([2, 3, 7, 6, 8, -1, -10, 15]);//op=>1
// let res4 = findLowestMinimum2([2, 3, -7, 6, 8, 1, -10, 15]);//=>4
// let res5 = findLowestMinimum2([1, 1, 0, -1, -2]);//op=>2

// console.log("res: ", res1);
console.log("res: ", res2);
console.log("res: ", res3);
// console.log("res: ", res4);
// console.log('res5: ', res5);

// function firstMissingPositive(arr, n)
// {
//     let ptr = 0;
     
//     // Check if 1 is present in array or not
//     for(let i = 0; i < n; i++)
//     {
//         if (arr[i] == 1)
//         {
//             ptr = 1;
//             break;
//         }
//     }
 
//     // If 1 is not present
//     if (ptr == 0)
//         return 1;
 
//     // Changing values to 1
//     for(let i = 0; i < n; i++)
//         if (arr[i] <= 0 || arr[i] > n)
//             arr[i] = 1;
 
//     // Updating indices according to values
//     for(let i = 0; i < n; i++)
//         arr[(arr[i] - 1) % n] += n;
 
//     // Finding which index has value less than n
//     for(let i = 0; i < n; i++)
//         if (arr[i] <= n)
//             return i + 1;
 
//     // If array has values from 1 to n
//     return n + 1;
// }
 
// // Driver code
// let arr = [ 2, 3, -7, 6, 8, 1, -10, 15 ];
// let n = arr.length;
// let ans = firstMissingPositive(arr, n);
// console.log('ans: ', ans);