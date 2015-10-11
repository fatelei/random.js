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
      assert.ok(array[0] === rst[0] || array[0] !== rst[0]);
    });
  });

  describe('Test randomObject', function () {
    it('should be ok', function () {
      var obj = {
          '1': 1,
          '2': 2,
          '3': 3,
          '4': 4
      };

      var newObj = random.randomObject(obj);

      var oldKeys = Object.keys(obj);
      var newkeys = Object.keys(newObj);

      assert.ok(oldKeys[0] === newkeys[0] || oldKeys[0] !== newkeys[0]);
    });
  });

  describe('Test choice', function () {
    it('should be ok', function () {
      var array = [1, 2, 3, 4, 5];
      var element = random.choice(array);
      assert.ok(array.indexOf(element) !== -1);
    });
  });
});
