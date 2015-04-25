random.js
=========

[![Build Status](https://travis-ci.org/fatelei/random.js.svg?branch=master)](https://travis-ci.org/fatelei/random.js)

JavaScript random tools

## Install

```
npm install jsrandom
```

## Usage

```
var random = require('jsrandom');
var arr = [1, 2, 3, 4, 5];

var obj = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4
};

console.log(random.randomInt(1, 10));
console.log(random.randomArray(arr));
console.log(random.randomObject(obj));
console.log(random.randPickFromArray(arr));
```

## Methods

### randomInt(min, max)

	Generate a random number between min(inclusive) and max(inclusive).

### randomArray(arr)

	Generate a random order array.

### randomObject(obj)

	Generate a random object.

### randPickFromArray(arr)

    Return a random element from an array.
