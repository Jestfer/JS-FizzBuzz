describe("FizzBuzz", function() {
  it("Checks if there are 100 elems in the array", function() {
    var range = Array.from({length: 101}, (x,i) => i);

    expect(FizzBuzz.print(range).length).toEqual(101);
  });
});