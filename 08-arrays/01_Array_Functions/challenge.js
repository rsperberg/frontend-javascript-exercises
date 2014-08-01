module.exports.reversePlusOne = function(someArray) {
   var newArray = someArray.reverse();
   newArray.unshift(1);
   return newArray;
};

module.exports.plusesEverywhere = function(someArray) {
   var newArray = someArray.join('+');
   return newArray;
};

module.exports.arrayQuantityPlusOne = function(someArray) {
   var answer = someArray.length + 1;
   return answer;
};
/*
reversePlusOne([1,2]); // returns [1,2,1]
reversePlusOne([5,4,3,2]); // returns [1,2,3,4,5]

plusesEverywhere([1,2,3]); // returns "1+2+3"
plusesEverywhere([18,24]); // returns "18+24"

arrayQuantityPlusOne([0,0,1,0,2,1]); // returns 7
arrayQuantityPlusOne([42]); // returns 2
*/
