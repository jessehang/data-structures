var BinarySearchTree = function(value) {
  var someInstance = Object.create(bst);
  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  return someInstance;
};

var bst = {};

bst.insert = function(value) { //Log time constraint
  //var child = BinarySearchTree(value);
  if (value < this.value) {
    if (!this.left) {
      this.left = BinarySearchTree(value);
    } else {
      bst.insert.call(this.left, value);      
    }
  } else {
    if (!this.right) {
      this.right = BinarySearchTree(value);
    } else {
      bst.insert.call(this.right, value);
    }
  }
};

bst.contains = function(value) { //Log time constraint
  if (value === this.value) {
    return true;
  } 

  if (value < this.value && this.left) {
    return bst.contains.call(this.left, value);
  } else if (value > this.value && this.right) {
    return bst.contains.call(this.right, value);
  }

  return false;
};

bst.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    bst.depthFirstLog.call(this.left, cb);
  } 
  
  if (this.right) {
    bst.depthFirstLog.call(this.right, cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
*/
