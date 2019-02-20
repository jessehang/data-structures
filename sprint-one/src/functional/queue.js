var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var number = Object.keys(storage).length;
    if (storage[number]) {
      number += 1;
      storage[number] = value;
    } else {
      storage[number] = value;
    }
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var size = Object.keys(storage).length;
    var keep = storage[keys[0]];
    delete storage[keys[0]];
    return keep;
  };

  someInstance.size = function() {
    var size = Object.keys(storage);
    return size.length;
  };

  return someInstance;
};
