class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var size = Object.keys(this.storage).length;
    this.storage[size] = value;
  }

  size() {
    var size = Object.keys(this.storage).length;
    return size;
  }

  pop() {
    var keys = Object.keys(this.storage);
    var size = Object.keys(this.storage).length;
    var keep = this.storage[keys[size - 1]];
    delete this.storage[keys[size - 1]];
    return keep;
  }

}