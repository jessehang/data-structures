var Queue = function () {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (string) {
  var keys = Object.keys(this.storage);
  var next = Number(keys[keys.length - 1]) + 1;
  if (keys.length > 0) {
    this.storage[next] = string;
  } else {
    this.storage[0] = string;
  }
};

queueMethods.dequeue = function () {
  var keys = Object.keys(this.storage);
  var first = this.storage[keys[0]];
  delete this.storage[keys[0]];
  return first;
};

queueMethods.size = function () {
  var size = Object.keys(this.storage);
  return size;
};