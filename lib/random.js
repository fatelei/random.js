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
  return Math.floor(Math.random() * (max - min)) + min;
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

module.exports = random;