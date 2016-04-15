# gobble-buble

Compile ES6 files with Gobble and Bublé. Creates sourcemaps automatically.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-buble
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'buble', options );
```

The `options` argument, if specified, is passed to Bublé - consult the [documentation](https://gitlab.com/Rich-Harris/buble). Sourcemaps are created by default (all the relevant information is filled in by Gobble, you don't need to specify `sourceMapName` options etc) - if you don't want that, pass `sourceMap: false`.


## License

MIT. Copyright 2016 Rich Harris
