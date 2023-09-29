# mayhew

[Mayhew's formula][1] for calculating one-repetition maximum.

## Example

``` javascript
const mayhew = require('mayhew');

mayhew(100, 10);
// => 130
```

## Installation

``` bash
$ npm install mayhew
```

## API

``` javascript
const mayhew = require('mayhew');
```

### `mayhew(weight, reps)`

Given _Number_ `weight` and _Number_ `reps`, returns Mayhew's one-repetition
maximum as a _Number_.


   [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Mayhew_et_al.
