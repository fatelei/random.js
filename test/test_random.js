/**
 * Test random
 */

var assert = require('assert');

var random = require('../index');

describe('Test random', function () {
  describe('Test randomInt', function () {
    it('should be ok', function () {
      var y = random.randomInt(1, 10);
      assert.ok(y >= 1 && y <= 10);
    });
  });

  describe('Test randomArray', function () {
    it('should be ok', function () {
      var array = [1, 2, 3, 4, 5];
      var rst = random.randomArray(array);
      assert.ok(array[0] === rst[0]);
    });
  });
});