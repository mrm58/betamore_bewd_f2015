var loD = require('lodash')
var globNext = 1;
var globCur = 1;
var globPrev = 1;

function fibNumber(index) {
  if(index === 0)
  {
    return 0;
  }
  else if (index === 1 || index === 2) 
  {
    return 1;
  } 
  else if (index > 2) 
  {
    return fibNumber(index - 2) + fibNumber(index - 1);
  }
}

function fibNumberFor(index) 
{
	var next = 1;
	var cur = 1;
	var prev = 1;
  if(index === 0)
  {
    return 0;
  }
	else if (index === 1 || index === 2) 
	{
		return 1;
  }
  for (var i = 3; i <= index; i++)
  {
  	next = cur + prev;
  	prev = cur;
  	cur = next;
  };
  return cur;
}

function fibNumberLo(index)
{
  var fibArray = (loD.map(loD.times(index+1), 
    function fib(num){
      if (num === 0)
      {
        return 0;
      }
      else if ((num === 1) || (num === 2)) 
      {
        return 1;
      }
      else
      {
        globNext = globCur + globPrev;
        globPrev = globCur;
        globCur = globNext;
        return globCur;
      }
    }));

  globNext = 1;
  globCur = 1;
  globPrev = 1;

  return fibArray[index];
}

function fibNum(index, fibArray)
{
  if(index === 0)
  {
    return 0;
  }
  if((index === 0) || (index === 1))
  {
    return 1;
  }
  return fibArray[index-1] + fibArray[index-2]
}

console.log(fibNumber(3))
console.log(fibNumberFor(0))
console.log(fibNumberFor(1))
console.log(fibNumberFor(2))
console.log(fibNumberFor(3))
console.log(fibNumberFor(4))
console.log(fibNumberFor(5))
console.log(fibNumberFor(6))
console.log(fibNumberFor(7))
console.log(fibNumberFor(8))
console.log(fibNumberFor(15))
console.log(fibNumberFor(50))

var assert = require('assert');

describe('fibNumber', function() {
  it('fibNumber should return 0 when called with 0', function() {
    assert.deepEqual(fibNumber(0), 0);
  });
  it('fibNumberFor should return 0 when called with 0', function() {
    assert.deepEqual(fibNumberFor(0), 0);
  });
  it('fibNumberLoD should return 0 when called with 0', function() {
    assert.deepEqual(fibNumberLo(0), 0);
  });

  it('fibNumber should return 1 when called with 1', function() {
    assert.deepEqual(fibNumber(1), 1);
  });
  it('fibNumberFor should return 1 when called with 1', function() {
    assert.deepEqual(fibNumberFor(1), 1);
  });
  it('fibNumberLoD should return 1 when called with 1', function() {
    assert.deepEqual(fibNumberLo(1), 1);
  });

  it('fibNumber should return 1 when called with 2', function() {
    assert.deepEqual(fibNumber(2), 1);
  });
  it('fibNumberFor should return 1 when called with 2', function() {
    assert.deepEqual(fibNumberFor(2), 1);
  });
  it('fibNumberLoD should return 1 when called with 2', function() {
    assert.deepEqual(fibNumberLo(2), 1);
  });

  it('fibNumber should return 2 when called with 3', function() {
    assert.deepEqual(fibNumber(3), 2);
  });
  it('fibNumberFor should return 2 when called with 3', function() {
    assert.deepEqual(fibNumberFor(3), 2);
  });
  it('fibNumberLoD should return 2 when called with 3', function() {
    assert.deepEqual(fibNumberLo(3), 2);
  });

  it('fibNumber should return 3 when called with 4', function() {
    assert.deepEqual(fibNumber(4), 3);
  });
  it('fibNumberFor should return 3 when called with 4', function() {
    assert.deepEqual(fibNumberFor(4), 3);
  });
  it('fibNumberLoD should return 3 when called with 4', function() {
    assert.deepEqual(fibNumberLo(4), 3);
  });

  it('fibNumber should return 5 when called with 5', function() {
    assert.deepEqual(fibNumber(5), 5);
  });
  it('fibNumberFor should return 5 when called with 5', function() {
    assert.deepEqual(fibNumberFor(5), 5);
  });
  it('fibNumberLoD should return 5 when called with 5', function() {
    assert.deepEqual(fibNumberLo(5), 5);
  });

  it('fibNumber should return 610 when called with 15', function() {
    assert.deepEqual(fibNumber(15), 610);
  });
  it('fibNumberFor should return 610 when called with 15', function() {
    assert.deepEqual(fibNumberFor(15), 610);
  });
  it('fibNumberLo should return 610 when called with 15', function() {
    assert.deepEqual(fibNumberLo(15), 610);
  });

//  it('fibNumber should return 12586269025 when called with 50', function() {
//    assert.deepEqual(fibNumber(50), 12586269025);
//  });
  it('fibNumberFor should return 12586269025 when called with 50', function() {
    assert.deepEqual(fibNumberFor(50), 12586269025);
  });
  it('fibNumberLo should return 12586269025 when called with 50', function() {
    assert.deepEqual(fibNumberLo(50), 12586269025);
  });

})
