
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { //Constant time constraint
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    this._storage.get(index)[k] = v;//Check if this accesses storage and sets new key
  } else {
    var obj = {};
    obj[k] = v;
    this._storage.set(index, obj);
  }
};

HashTable.prototype.retrieve = function(k) { //Constaint time constraint
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) { //Constant time constraint
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index)[k] = undefined;
  //this._storage.set(index, this._storage.get(index)[key]undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


