/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var createDictionary = function (array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = array[i];
  }
  return obj;
};
var twoSum = function (nums, target) {
  const mapping = createDictionary(nums);

  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    if (mapping[temp] && temp + nums[i] === target) {
      return [mapping[temp], nums[i]];
    }
  }
};

let res = twoSum([1, 3, 4, 2], 6);
console.log("res: ", res);
