/**
 * Radom tools
 */

var random = {};

/**
 * Generate a number between min(inclusive) and max(inclusive)
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
random.randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Random a array
 * @param  {Array} array The origin array
 * @return {Array}       The randomed array
 */
random.randomArray = function (array) {
  var length = array.length;
  var i, j;
  var tmp;

  for (i = length - 1; i >= 0; i--) {
    j = this.randomInt(0, i);

    if (j !== i) {
      tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }
  return array;
};

/**
 * Random an object
 * @param  {Object} obj The origin object
 * @return {Object}     The randomed object     
 */
random.randomObject = function (obj) {
  var keys = Object.keys(obj);
  var i;

  this.randomArray(keys);

  var newObj = {};

  for (i = 0; i < keys.length; i++) {
    newObj[keys[i]] = obj[keys[i]];
  }

  return newObj;
};


/**
 * Random pick an element from an array.
 * @param {Object} array
 * @return An element from an array.
 */
random.choice = function (array) {
  var length = array.length;
  var randIndex = this.randomInt(0, length - 1);
  return array[randIndex];
};

module.exports = random;