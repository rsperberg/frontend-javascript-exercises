module.exports.copy = function(obj) {
   var newObj = {};
   for (var i in obj) {
      var propName = i.toString();
      newObj[propName] = obj[i];
   }
   return newObj;
};

module.exports.extend = function(dest, src) {
   for (var i in src) {
      var propName = i.toString();
      dest[propName] = src[i];
   }
   return dest;
};

module.exports.hasElems = function(obj,arr) {
   var keysInObj = Object.keys(obj);
   var sortedKeys = keysInObj.sort();
   var sortedArr = arr.sort();
   for (var i = 0; i < arr.length; i++) {
      if ( !(sortedKeys[i] === sortedArr[i]) ) {
         return false;
      }
   }
   return true;
};

/*
copy({name: "Rob"}) // returns a new object {name: "Rob"}

extend({name: "Rob"}, {age: 101}) // should modify and return `dest` with content of {name: "Rob", age: 101}
extend({name: "Rob"}, {name: "Steve"}) // should modify and return `dest` with content of {name: "Steve"}

take two arguments. The first is an object and the second is an array of elements
return true when all of the elements in the array are keys in the object, false otherwise
*/
