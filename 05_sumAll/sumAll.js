// const sumAll = function (firstInt, secondInt) {
// 
//    if (firstInt < 0 || secondInt < 0) {
//       return 'ERROR';
//    } else if (typeof firstInt !== 'number' || typeof secondInt !== 'number') {
//       return 'ERROR';
//    }
// 
//    let smallNum = Math.min(firstInt, secondInt);
//    let bigNum = Math.max(firstInt, secondInt);
//    let count = Math.abs(firstInt - secondInt);
//    let resultNum = 0;
// 
//    while (smallNum <= bigNum) {
//       resultNum = resultNum + smallNum;
//       smallNum++;
// 
//    }
//    return resultNum;
// };


function sumAll(a, b) {
   if (typeof a != 'number' || typeof b != 'number' || a < 0 || b < 0) return 'ERROR'

   return Array.from({
      length: Math.abs(a - b) + 1
   }, (v, k) => k + Math.min(a, b)).reduce((a, v) => a + v)
}




// Do not edit below this line
module.exports = sumAll;