module.exports.getKeys = function(someObject) {
   var newArray = [];
   for (var i in someObject) {
      newArray.push(i);
   }
   return newArray;
};

module.exports.getValues = function(someObject) {
   var newArray = [];
   for (var i in someObject) {
      newArray.push(someObject[i]);
   }
   return newArray;
};

module.exports.objectToArray = function(someObject) {
   var newArray = [];
   var aString ='';
   for (var i in someObject) {
      aString = i + ' is ' + someObject[i];
      newArray.push(aString);
   }
   return newArray;

};

/*
return an array of each of the keys in the object
getKeys({name: "Rob", age: 101}) // returns ["name", "age"]

getValues({name: "Rob", age: 101}) // returns ["Rob", 101]

convert the object passed in to an array of strings
each string should be in the format of "[key] is [value]" for each key/value pair in the object
if an empty object is passed in, an empty array should be returned

objectToArray({name: "Rob", age: 101}) // should return ["name is Rob", "age is 101"]
*/
