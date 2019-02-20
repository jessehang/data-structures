var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.push = function(value) {
    var size = Object.keys(storage).length;
    storage[size] = value;
  };

  someInstance.pop = function () {
    var keys = Object.keys(storage);
    //[1,2,3,4]
    var size = Object.keys(storage).length;
    var keep = storage[keys[size - 1]];
    delete storage[keys[size - 1]];
    return keep;
  };

  someInstance.size = function() {
    var size = Object.keys(storage);
    return size.length;
  };

  return someInstance;
};


