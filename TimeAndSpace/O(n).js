//if we are looping through the array n times then it's O(n);

let array = new Array(10).fill(10);

const OrderOfN = (array) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }
};

//time complexity will be O(n) + O(n)
const Order_Of_N_Plus_N=(array1,array2)=>{
  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log(element);
  }
  for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    console.log(element);
  }
}