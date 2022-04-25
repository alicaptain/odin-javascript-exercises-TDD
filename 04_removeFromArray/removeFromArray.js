const removeFromArray = function (incomingArray, ...incomingWhatEver) {

   countRest: for (oneWhatEver of incomingWhatEver) {
      let usualSuspectIndex = incomingArray.findIndex((catchSuspect) => catchSuspect === oneWhatEver);
      if (usualSuspectIndex !== -1) {
         incomingArray.splice(usualSuspectIndex, 1)
      };
   }
   return incomingArray;
}




;

// Do not edit below this line
module.exports = removeFromArray;