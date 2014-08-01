module.exports.favoriteNumber = function(fav, guess) {
   if (guess > fav) {
      return 'Too high';
   } else if (guess < fav) {
      return 'Too low';
   } else {
      return 'You got it!';
   }
};

module.exports.checkLock = function(a, b, c, d) {
   if ( !(typeof a  === 'number') ) {
      return 'incorrect';
   } else if ( !(typeof b  === 'number') ) {
      return 'incorrect';
    } else if ( !(typeof c  === 'number') ) {
      return 'incorrect';
   } else if ( !(typeof d  === 'number') ) {
      return 'incorrect';
   } else if ( !( (a === 3) || (a === 5) || (a === 7)) ) {
      return 'incorrect';
    } else if ( !(b === 2)) {
      return 'incorrect';
   } else if ( !((c >= 5) && (c <= 100)) ) {
      return 'incorrect';
   } else if (!(d < 9) && !(d > 20)) {
      return 'incorrect';
   } else {
      return 'correct';
 }
};

module.exports.canIGet = function(item, money) {
if (item === 'MacBook Air') {
   if (money >= 899) {
      return true;
   } else {
      return false;
   }
} else if (item === 'MacBook Pro') {
   if (money >= 1099) {
      return true;
   } else {
      return false;
   }
} else if (item === 'Mac Pro') {
   if (money >= 2999) {
      return true;
   } else {
      return false;
   }
} else if (item === 'Apple Sticker') {
   if (money >= 1) {
      return true;
   } else {
      return false;
   }
} else {
   return false;
}
};


/*
canIGet('MacBook Air', 100) // returns false
*/
