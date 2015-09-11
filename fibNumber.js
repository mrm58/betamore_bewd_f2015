function fibNumber(index) {
  if (index === 0 || index === 1) 
  {
    return 1;
  } 
  else if (index >= 2) 
  {
    return fibNumber(index - 2) + fibNumber(index - 1);
  }
}

function fibNumberFor(index) 
{
	var next = 1;
	var cur = 1;
	var prev = 1;
	if (index === 0 || index === 1) 
	{
		return 1;
  	}
  	for (var i = 2; i <= index; i++)
  	{
  		next = cur + prev;
  		prev = cur;
  		cur = next;
  	};
  	return cur;
}

console.log(fibNumber(3))
console.log(fibNumberFor(0))
console.log(fibNumberFor(1))
console.log(fibNumberFor(2))
console.log(fibNumberFor(3))
console.log(fibNumberFor(4))
console.log(fibNumberFor(5))

var assert = require('assert');

describe('fibNumber', function() {
  it('fibNumber should return 1 when called with 0', function() {
    assert.deepEqual(fibNumber(0), 1);
  });
  it('fibNumberFor should return 1 when called with 0', function() {
    assert.deepEqual(fibNumberFor(0), 1);
  });

  it('fibNumber should return 1 when called with 1', function() {
    assert.deepEqual(fibNumber(1), 1);
  });
  it('fibNumberFor should return 1 when called with 1', function() {
    assert.deepEqual(fibNumberFor(1), 1);
  });

  it('fibNumber should return 2 when called with 2', function() {
    assert.deepEqual(fibNumber(2), 2);
  });
  it('fibNumberFor should return 2 when called with 2', function() {
    assert.deepEqual(fibNumberFor(2), 2);
  });

  it('fibNumber should return 3 when called with 3', function() {
    assert.deepEqual(fibNumber(3), 3);
  });
  it('fibNumberFor should return 3 when called with 3', function() {
    assert.deepEqual(fibNumberFor(3), 3);
  });

  it('fibNumber should return 5 when called with 4', function() {
    assert.deepEqual(fibNumber(4), 5);
  });
  it('fibNumberFor should return 5 when called with 4', function() {
    assert.deepEqual(fibNumberFor(4), 5);
  });

  it('fibNumber should return 8 when called with 5', function() {
    assert.deepEqual(fibNumber(5), 8);
  });
  it('fibNumberFor should return 8 when called with 5', function() {
    assert.deepEqual(fibNumberFor(5), 8);
  });

  it('fibNumber should return 987 when called with 15', function() {
    assert.deepEqual(fibNumber(15), 987);
  });
  it('fibNumberFor should return 987 when called with 15', function() {
    assert.deepEqual(fibNumberFor(15), 987);
  });
})