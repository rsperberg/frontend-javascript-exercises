module.exports.addItem = function(item,someArray) {
   var locationInArray = someArray.indexOf(item);
   if (locationInArray === -1) {
      someArray.push(item);
      return someArray;
   } else {
     return someArray;
   }
};

module.exports.reverseSortedList = function(someArray) {
   someArray.sort();
   var newArray = someArray.reverse();
   return newArray;
};
/*
addItem(1, [5,4,3,2]); // returns [5,4,3,2,1]
addItem("brown", ["green", "yellow"]); // returns ["green", "yellow", "brown"]
addItem("brown", ["green", "yellow", "brown"]); // returns ["green", "yellow", "brown"]

reverseSortedList([2,4,1,5,3]); // returns [5,4,3,2,1]
reverseSortedList(["b", "d", "q", "a"]); // returns ["q", "d", "b", "a"]
*/
