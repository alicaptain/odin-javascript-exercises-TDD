const repeatString = function (singleString, theNum) {
   let allStrings = '';
   if (theNum < 0) {
      allStrings = 'ERROR';
   } else {
      for (i = 0; i < theNum; i++) {

         allStrings = allStrings + singleString;

      }
   }
   return allStrings;


};

console.log(typeof singleString);

// Do not edit below this line
module.exports = repeatString;