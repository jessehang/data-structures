var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head !== null) {
      var newTail = Node(value);
      list.tail.next = newTail;
      list.tail = newTail;
    } else {
      list.head = Node(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var formerHead = list.head.value;
      list.head = list.head.next;
      return formerHead;
    }
  };

  list.contains = function(target) {
    while (list.head !== null) {
      if (list.head.value === target) {
        return true;
      } 
      list.head = list.head.next;
    }
    return false;
  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//This has a linear time complexity
