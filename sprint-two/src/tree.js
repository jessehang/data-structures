var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  // your code here
  //newTree.children = [];// fix me

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children[this.children.length] = child;
};

treeMethods.contains = function(target) {
  return checkChildren(this, target);
};        

var checkChildren = function(node, target) {
  if (node.value === target) { //base case
    return true;
  }
  //variable to check if tree contains target (bool)
  var isThere = false;
  for (var i = 0; i < node.children.length; i++) { //iterate through children
    isThere = isThere || checkChildren(node.children[i], target);
  }
  return isThere;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/* This is a linear time complexity */
