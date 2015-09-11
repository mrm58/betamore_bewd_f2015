// Write a function that takes a single argument: numberOfTimes
// That argument will loop from 0 to numberOfTimes and return an array
// where each value in the array is defined as follows:
// number, or if divisible by 3 "Fizz", if divisible by 5 "Buzz"
// and if divisble by 3 and 5 "FizzBuzz"

function fizzBuzz(numberOfTimes){
	var fizzArray = [];
	for (var i = 0; i <= numberOfTimes; i++) 
	{
		if((i % 3 === 0) && (i % 5 === 0))
		{
			fizzArray.push("FizzBuzz");
		}
		else if (i % 3 === 0) 
		{
			fizzArray.push("Fizz");
		}
		else if (i % 5 === 0)
		{
			fizzArray.push("Buzz");
		}
		else
		{
			fizzArray.push(i);
		}
	}
    return fizzArray;
}

//console.log(fizzBuzz(7));

var assert = require('assert');

describe('fizzBuzz', function() {
  it('should return ["FizzBuzz"] when called with 0', function() {
    assert.deepEqual(fizzBuzz(0), ['FizzBuzz']);
  });

  it('should return ["FizzBuzz", 1, 2, "Fizz", 4, "Buzz"] when called with 5', function() {
    assert.deepEqual(fizzBuzz(5), ['FizzBuzz', 1, 2, "Fizz", 4, "Buzz"]);
  })

  it('should return ["FizzBuzz", 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16] when called with 16', function() {
    assert.deepEqual(fizzBuzz(16), ['FizzBuzz', 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16]);
  });
})