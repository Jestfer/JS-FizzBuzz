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

function FizzBuzz() {
};

FizzBuzz.prototype._isDivisibleBy = function(num, divisor) {
  return num % divisor === 0;
};

FizzBuzz.prototype._isDivisibleByFifteen = function(num) {
  // return FizzBuzz.prototype._isDivisibleBy(num, 15);
  return this._isDivisibleBy(num, 15);
};

FizzBuzz.prototype.output = function(num) {
  if (this._isDivisibleBy(num, 15)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(num, 3)) {
    return 'Fizz';
  } else if (this._isDivisibleBy(num, 5)) {
    return 'Buzz';
  }

  return num;
};

FizzBuzz.prototype.print = function(num) {
  var result = []

  for (var i = 1; i <= num; i++) {
    result.push(this.output(i));
  }

  return result;
};