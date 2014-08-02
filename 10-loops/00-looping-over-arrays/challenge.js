module.exports.sumNumbers = function(someArray) {
   var total = 0;
   if (someArray.length === 0) {
      return 0;
   } else {
      for (var item in someArray) {
         total += someArray[item];
      }
   }
   return total;
};

module.exports.splitAndLowerCaseString = function(someString) {
   var answer = someString.toLowerCase();
//   answer.split(',');
   var answerArray = [];
   answerArray = answer.split(',');
   return answerArray;
};

module.exports.addIndex = function(someArray) {
   var newArray =[];
   for (var i in someArray) {
      var newString = i.toString() + ' is ' + someArray[i].toString();
      newArray.push(newString);
   }
    return newArray;
};
/*
sumNumbers([1, 2, 3]) // should return 6

splitAndLowerCaseString("TEST") // returns ["test"]
splitAndLowerCaseString("THIS,IS,SPLIT,BY,COMMAS") // returns ["this", "is", "split", "by", "commas"]
splitAndLowerCaseString("THIS HAS NO COMMAS") // returns ["this has no commas"]

addIndex([1, 2, 3]) // returns ["0 is 1", "1 is 2", "2 is 3"]
addIndex(['My', 1, 'number']) // returns ["0 is My", "1 is 1", "2 is number"]
*/
