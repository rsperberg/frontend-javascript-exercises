module.exports.stream = function(conditionalFn, actionFn) {
   var determiner = conditionalFn();
   while (determiner === true) {
      actionFn();
      determiner = conditionalFn();
   }
};

module.exports.sumNumbers = function(arr) {
   var total = 0;
   while (arr.length > 0) {
      total = total += arr[0];
      arr.shift();
   }
   return total;
};
/*
sumNumbers([]); // should return 0.
sumNumbers([1,2,3,4]); // should return 10.
*/
