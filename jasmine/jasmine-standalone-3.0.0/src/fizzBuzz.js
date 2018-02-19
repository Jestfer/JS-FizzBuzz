// var FizzBuzz = function(num) {
//   var arr = [];

//   for (var i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push('FizzBuzz');
//     } else if (i % 3 === 0) {
//       arr.push('Fizz');
//     } else if (i % 5 === 0) {
//       arr.push('Buzz');
//     } else {
//       arr.push(i);
//     }
//   }

//   return arr.join(', ');
// };

var FizzBuzz = function() {};

FizzBuzz.prototype._isDivisibleByThree = function(num) {
  return true;
};