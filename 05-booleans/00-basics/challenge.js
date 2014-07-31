module.exports.equalStrings = function(stringOne, stringTwo) {
   return (stringOne === stringTwo);
};

module.exports.notEqual = function(one, two) {
   return !(one === two);
};

module.exports.inBetween = function(lower, middle, upper) {
   return (lower < middle) && (middle < upper);
};

module.exports.outsideRanges = function(number) {
   return ( !((number >=  10) && (number <= 20))  && !((number > 42) && (number <= 75)) && !((number > 1) && (number < 6))  );
};

module.exports.nameAndPrice = function(name, price) {
   return ((name === 'NYTimes') && (price >= 1)) || ((name === 'LATimes') && (price >= 1));
};
/*
return true when the number is:
  not between 10 and 20, it also can't be 10 or 20
  not between 42 and 75, it also can't be 75. 42 is allowed
  not between 1 and 6. 1 and 6 are allowed
For example:

outsideRanges(42) // should return true
outsideRanges(75) // should return false
*/
