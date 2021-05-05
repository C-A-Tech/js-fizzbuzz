class fizzBuzz {
  singlePlay(number) {
    if(number % 5 == 0 && number % 3 == 0){
      return "FizzBuzz";
    } else if(number % 5 == 0){
      return "Buzz";
    } else  if(number % 3 == 0){
      return "Fizz";
    } else {
      return number;
    };
  };

  sequentialPlay(){
    let array = new Array;
    for (let i = 1; i <= 100; i++) {
      array.push(this.singlePlay(i));
    };
    return array
  };
};