var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  var number = Object.keys(this.storage).length;
  if (this.storage[number]) {
    number += 1;
    this.storage[number] = value;
  } else {
    this.storage[number] = value;
  }
};

Queue.prototype.size = function () {
  var size = Object.keys(this.storage).length;
  return size;
};

Queue.prototype.dequeue = function () {
  var keys = Object.keys(this.storage);
  var keep = this.storage[keys[0]];
  delete this.storage[keys[0]];
  return keep;
};


