class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    let poppedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return poppedItem;
  }

  delete(index) {
    let itemToDelete = this.data[index];
    this.shiftItems(index);
    return itemToDelete;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

let newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push("Hi");
newArray.push("How");
newArray.push("are");
newArray.delete(2);
newArray.delete(0);
console.log("newArray: ", newArray);
