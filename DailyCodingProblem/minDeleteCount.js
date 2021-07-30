// Given a string, find minimum number of deletions required so that there will be no
//  two consecutive repeating characters in the string.
/**
 * Input : AAABBB
   Output : 4
   Explanation : New string should be AB

  Input : ABABABAB
  Output : 0
  Explanation : There are no consecutive repeating characters.
 */

function minDeletion(str, array) {
  let tmpStr = str.split("");
  let resultObj = [];
  let deleteCounter = 0;
  let i = 0;
  j = 1;
  if (!str) return `In-valid string`;
  while (i <= tmpStr.length - 2 && j <= tmpStr.length - 1) {
    if (tmpStr[i] === tmpStr[j]) {
      if (array[i] < array[j]) {
        tmpStr.splice(j, 1);
        array.splice(j, 1);
        j = i + 1;
      } else {
        tmpStr.splice(i, 1);
        array.splice(i, 1);
        i++;
        j = i + 1;
      }
    } else {
      i++;
      j++;
    }
    console.log("tmpStr: ", tmpStr);
    if (tmpStr.length === str.length) {
      return 0;
    } else {
      return array.reduce((val, acc) => val + acc, 0);
    }
  }

  return resultObj;
}
let result = minDeletion("AAABBB", [1, 2, 1, 1, 2, 2]);
console.log("result: ", result);
