
describe("Fizzbuzz", function(){
  
  let newGame
  beforeEach (function () {newGame = new fizzBuzz;}); 

  it("returns 'Fizz' when given a multiple of 3",function() {
    expect(newGame.singlePlay(3)).toEqual("Fizz");
  });

  it("returns 'Buzz' when given a multiple of 5",function() {
    expect(newGame.singlePlay(10)).toEqual("Buzz");
  });

  it("returns 'FizzBuzz' when given a number that is a multiple of 3 and 5", function() {
    expect(newGame.singlePlay(15)).toEqual("FizzBuzz");
  });

  it("returns number given when not a multiple of 3 or 5", function() {
    expect(newGame.singlePlay(7)).toEqual(7);
  });

  it("returns 'FizzBuzz' ", function() {
    let array = newGame.sequentialPlay();
    expect(array.length).toEqual(100);
    expect(array[14]).toEqual("FizzBuzz");
  });
});