[![TypeScript version][ts-badge]][typescript-38]
[![Build Status - Travis][travis-badge]][travis-ci]
[![Node.js CI][ga-badge]][ga-ci]

# @floss/utils

Some javascript helper functions.

## Installation

```bash
npm install @floss/utils
```

### Import

ES6/Typescript

```javascript
import * as _ from "@floss/utils";
```

CommonJS

```javascript
const fu = require("@floss/utils");
```

## Example usage

### File reading and file writing

`_.fw()` and `_.fr()` provides quick access to file read/write. The helpers enforce providing the `__dirname` to avoid opening or writing to the wrong file. If the file extension is `.json`, the content is automatically encoded/decoded using `JSON.stringify()` and `JSON.parse()`.

```javascript
// Save an object as JSON
const obj = { name: "Hello world" };
_.fw(__dirname, "file.json", obj);

// Open the file and parse automatically
const file = _.fr(__dirname, "file.json");
console.log(file);
// => {name: 'Hello world'}
```

### Utils

`_.awaitCondition()` lets you await anything.

```javascript
(async () => {
  let aVariable;
  setTimeout(() => (aVariable = "Hello"), 5000);
  console.log(aVariable); // => undefined
  await awaitCondition(() => typeof aVariable !== "undefined");
  console.log(aVariable); // => "Hello"
})();
```

### Formatting

`_.numberFormat()` adds thousands separators/decimal points to a number.

```javascript
const val = _.numberFormat(8999.9112, 2, ",", " ");
console.log(val); // 8 999,91
```

### Dates

`_.date()` applies a format template to a date object.

```javascript
const now = _.date("Y-m-d");
// => 2020-06-11
const yesterday = _.date("Y-m-d", Date.now() - 1000 * 3600 * 24);
// => 2020-06-10
```

[ts-badge]: https://img.shields.io/badge/TypeScript-3.8-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2012.13-blue.svg
[travis-badge]: https://travis-ci.org/ViktorSvensson/utils.svg?branch=master
[travis-ci]: https://travis-ci.org/github/ViktorSvensson/utils
[typescript]: https://www.typescriptlang.org/
[typescript-38]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
[ga-badge]: https://github.com/ViktorSvensson/utils/workflows/Node.js%20CI/badge.svg
[ga-ci]: https://github.com/ViktorSvensson/utils/actions
