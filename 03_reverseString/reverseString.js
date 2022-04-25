const reverseString = function (toBeReversed) {
   let arrayed = toBeReversed.split('');
   let reversedArray = arrayed.reverse();
   return reversedArray.join('');

   console.log(toBeReversed);
   console.log(arrayed);
   console.log(reversedArray);
};




// Do not edit below this line
module.exports = reverseString;