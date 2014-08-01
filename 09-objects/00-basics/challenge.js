module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
   var courseInfo = {};
   courseInfo.title = courseTitle;
   courseInfo.duration = courseDuration;
   courseInfo.students = courseStudents;
   return courseInfo;
};

module.exports.addProperty = function(objecta,  newProp,  newValue) {
   if ( objecta.hasOwnProperty(newProp) ) {
      return objecta;
   } else {
       objecta[newProp] = newValue;
      return objecta;
   }
};

module.exports.formLetter = function(formObject) {
   var newLetter = 'Hello ' + formObject.recipient + ',\n\n' + formObject.msg + '\n\nSincerely,\n' + formObject.sender;
   return newLetter;
};

module.exports.canIGet = function(item, money) {
   var priceList = {};
   priceList['MacBook Air'] = 999;
   priceList['MacBook Pro'] = 1299;
   priceList['Mac Pro'] = 2499;
   priceList['Apple Sticker'] = 1;
   var answer = (money >= priceList[item]);
   return answer;
};

/*
createCourse('Bloc Front-End Engineering', '4 weeks', ['Joe', 'Tim', 'Rob'])
// should return {title: 'Bloc Front-End Engineering', duration: '4 weeks', students: ['Joe', 'Tim', 'Rob']}

addProperty({}, 'firstName', 'Jim') // should return { firstName: 'Jim' }
addProperty({firstName: 'Rob'}, 'firstName', 'Jim') // should return {firstName: 'Rob'}

formLetter({ recipient: "James", sender: "Richard", msg: "Things are well." })
// should return "Hello James,\n\nThings are well.\n\nSincerely,\nRichard"

canIGet('MacBook Air', 100) // returns false
canIGet('MacBook Air', 1000) // returns true
*/
