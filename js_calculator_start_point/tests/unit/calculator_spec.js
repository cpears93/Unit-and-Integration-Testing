var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // it should add 1 and 4 to get 5
  it(1 + 4 = 5, function(){
    assert.equal(5)
  })

  // it should subtract 4 from 7 to get 3
  it(7 - 4 = 3, function(){
    assert.equal(3)
  })

  // it should multiply 3 by 5 to get 15
  it(3 * 5 = 15, function(){
    assert.equal(15)
  })

  // it should divide 21 by 7 to get 3
  it(21 / 7 = 3, function(){
    assert.equal(3)
  })

  // it should concatenate multiple number button clicks
  it(
    assert.equal()
  })
  // it should chain multiple operations together
  it(
    assert.equal()
  })
  // it should clear running total without affecting calculation
  it(
    assert.equal()
  })
});
