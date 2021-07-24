// Given an array of integers,
// find the first missing positive integer in linear time
// and constant space. In other words,
// find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.

//  example, the input [3, 4, -1, 1] should give 2.
//  The input [1, 2, 0] should give 3.

const findLowestMinimum = (array) => {
  let filterData=array.filter(item=>item>0).sort();
  for (let index = 0; index < filterData.length; index++) {
    const element = filterData[index];
    if(element===filterData[index+1]){
      continue;
    }
    if(element!==filterData[index+1]-1){
      console.log('element+1: ', element+1);
      return element+1;
    }
  }
};
findLowestMinimum([1, -2, 4,0]);
findLowestMinimum([1, 2,0]);
findLowestMinimum([3,3,5,7,8, 4, -1, 2,1]);

