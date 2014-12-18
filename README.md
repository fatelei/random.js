random.js
=========

[![Build Status](https://travis-ci.org/fatelei/random.js.svg?branch=master)](https://travis-ci.org/fatelei/random.js)

JavaScript random tools

## Install

```
npm install randomjs
```

## Usage

```
var random = require('randomjs');
var arr = [1, 2, 3, 4, 5];

console.log(random.randomInt(1, 10));
console.log(random.randomArray(arr));
```

## Methods

### randomInt(min, max)

	Generate a random number between min(inclusive) and max(inclusive).

### randomArray(arr)

	Generate a random order array.