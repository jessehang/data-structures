var Stack = function(obj) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {}
  };

  extend(someInstance, stackMethods);

  return someInstance;

};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function (value) {
  var size = Object.keys(this.storage).length;
  this.storage[size] = value;
};

stackMethods.size = function () {
  var size = Object.keys(this.storage).length;
  return size;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  //[1,2,3,4]
  var size = Object.keys(this.storage).length;
  var keep = this.storage[keys[size - 1]];
  delete this.storage[keys[size - 1]];
  return keep;
};