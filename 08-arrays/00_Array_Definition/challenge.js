module.exports.newArray = function(a, b, c, d) {
   return [a, b, c, d];
};

module.exports.firstAndLast = function(someArray) {
  var  lastIndex = someArray.length -1;
   return [someArray[0], someArray[lastIndex]];
};
/*
newArray(1,2,3,4) // should return [1,2,3,4]

var array = ['one', 3, 'cool' 4];
firstAndLast(array) // should return ['one', 4]
*/
