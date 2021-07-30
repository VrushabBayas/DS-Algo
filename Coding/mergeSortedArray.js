//merge sorted arrays

function merger1(array1, array2) {
  let item1 = array1[0];
  let item2 = array2[0];
  let i = 1;
  j = 1;
  const resultArray = [];
  if (array1.length === 0 && array2.length === 0) return "Empty arrays";
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length < 0) {
    return array1;
  }
  while (item1 || item2) {
    if (!item2 || item1 < item2) {
      resultArray.push(item1);
      item1 = array1[i];
      i++;
    } else {
      resultArray.push(item2);
      item2 = array2[j];
      j++;
    }
  }
  return resultArray;
}

///better solution
function merge(left, right) {
  const resultArray = [];
  if (left.length === 0) {
    return right;
  }
  if (right.length === 0) {
    return left;
  }
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      resultArray.push(left.shift());
    } else {
      resultArray.push(right.shift());
    }
  }
  return [...resultArray, ...left, ...right];
}

//mergSort function
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const center = Math.floor(array.length / 2);
  let left = array.slice(0, center);
  let right = array.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

let result = mergeSort([4, 5, 6, 7, 1, 2, 3, 8, 19]);
console.log("result: ", result);
