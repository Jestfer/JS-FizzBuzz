// describe('FizzBuzz', function() {
//   // it('Checks if there are 100 elems in the array', function() {
//   //   var range = Array.from({ length: 101 }, (x, i) => i);
//   //   range.shift();
//   //
//   //   expect(FizzBuzz.print(100)).toEqual(range.join(', '));
//   // });

//   it('changes numbers divisible by 3 to Fizz', function() {
//     expect(FizzBuzz(3)).toEqual('1, 2, Fizz');
//   });

//   it('changes numbers divisible by 5 to Buzz', function() {
//     expect(FizzBuzz(5)).toEqual('1, 2, Fizz, 4, Buzz');
//   });

//   it('changes numbers divisible by both 3 and 5 to FizzBuzz', function() {
//     expect(FizzBuzz(15)).toEqual(
//       '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz'
//     );
//   });
// });

describe('FizzBuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when number is', function() {
    it('is divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(3, 3)).toEqual(true);
    });

    it('is not divisible by 3', function() {
      expect(fizzbuzz._isDivisibleBy(1, 3)).toEqual(false);
    });

    it('is divisible by 5', function() {
      expect(fizzbuzz._isDivisibleBy(5, 5)).toEqual(true);
    });

    it('is divisible by 15', function() {
      expect(fizzbuzz._isDivisibleByFifteen(15)).toEqual(true);
    });
  });
});
