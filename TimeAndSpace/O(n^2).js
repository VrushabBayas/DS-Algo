let array = new Array(10).fill(10);

//Time complexity will be n^2 because there are two for loops
const OrderOfN = (array) => {
  for (let i = 0; i < array.length; i++) {
    const iValue = array[i];
    for (let j = 0; j < array.length; j++) {
      const jValue = array[j];
      console.log(`Value of I and J are ${i} ${j}`)
    }
  }
};

//O(n + n^2)=>(O(n^2))
const OrderOfN_Plus_N = (array) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log('element: ', element);
  }
  for (let i = 0; i < array.length; i++) {
    const iValue = array[i];
    for (let j = 0; j < array.length; j++) {
      const jValue = array[j];
      console.log(`Value of I and J are ${i} ${j}`)
    }
  }
};