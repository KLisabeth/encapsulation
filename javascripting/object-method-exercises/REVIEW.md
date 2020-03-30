# encapsulation/javascripting/

> 3/30/2020, 10:36:03 AM 

## object-method-exercises/ - error

* [../REVIEW.md](../REVIEW.md)

### files

* [challenge-1.js](#challenge-1js---error) - error
* [challenge-2.js](#challenge-2js---fail) - fail
* [read-from-1.js](#read-from-1js---fail) - fail
* [read-from-2.js](#read-from-2js---fail) - fail
* [read-from-3.js](#read-from-3js---error) - error
* [write-to-1.js](#write-to-1js---fail) - fail
* [write-to-2.js](#write-to-2js---fail) - fail
* [write-to-3.js](#write-to-3js---fail) - fail

---

## challenge-1.js - error

* [review source](challenge-1.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
+ PASS: Test 8
TypeError: Cannot read property '0' of undefined
    at Object.<anonymous> ( [...] /object-method-exercises/challenge-1.js:24:29)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:101:5)
    at  [...] /review.js:139:28
    at Array.map (<anonymous>)
```

```js
const obj = {
  arr: [],
  merge: function (toMerge) { },
  replaceAll: function (newEntry) { },
  getRemixed: function (mixer) { },
  getCopy: function () { }
};

obj.merge([1, 2]);
console.assert(obj.arr[0] === 1, 'Test 1');
console.assert(obj.arr[1] === 2, 'Test 2');

obj.replaceAll('~');
console.assert(obj.arr[0] === '~', 'Test 3');
console.assert(obj.arr[1] === '~', 'Test 4');

const remixed = obj.getRemixed('|');
obj.merge([remixed]);
console.assert(obj.arr[0] === '~|~', 'Test 5');
console.assert(obj.arr[1] === '~', 'Test 6');
console.assert(obj.arr[2] === '~', 'Test 7');

console.assert(obj.getCopy() !== obj.arr, 'Test 8');
console.assert(obj.getCopy()[0] === '~|~', 'Test 9');
console.assert(obj.getCopy()[1] === '~', 'Test 10');
console.assert(obj.getCopy()[2] === '~', 'Test 11');

const finalRemix = obj.getRemixed('*');
console.assert(finalRemix === '~|~*~*~', 'Test 12');

```

[TOP](#encapsulation/javascripting)

---

## challenge-2.js - fail

* [review source](challenge-2.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
- FAIL: Test 10
- FAIL: Test 11
- FAIL: Test 12
- FAIL: Test 13
- FAIL: Test 14
- FAIL: Test 15
- FAIL: Test 16
- FAIL: Test 17
- FAIL: Test 18
- FAIL: Test 19
- FAIL: Test 20
- FAIL: Test 21
```

```js
const obj = {
  state: {
    biggest: -Infinity,
    smallest: Infinity,
    all: []
  },
  addNumber: function (newValue) { }
};

const returned1 = obj.addNumber(0);
console.assert(returned1 === true, 'Test 1');
console.assert(obj.state.all.length === 1, 'Test 2');
console.assert(obj.state.biggest === 0, 'Test 3');
console.assert(obj.state.smallest === 0, 'Test 4');

const returned2 = obj.addNumber(1);
console.assert(returned2 === true, 'Test 5');
console.assert(obj.state.all.length === 2, 'Test 6');
console.assert(obj.state.biggest === 1, 'Test 7');
console.assert(obj.state.smallest === 0, 'Test 8');

const returned3 = obj.addNumber(-1);
console.assert(returned3 === true, 'Test 9');
console.assert(obj.state.all.length === 3, 'Test 10');

const returned4 = obj.addNumber(-0.5);
console.assert(returned4 === true, 'Test 11');
console.assert(obj.state.all.length === 4, 'Test 12');
console.assert(obj.state.biggest === 1, 'Test 13');
console.assert(obj.state.smallest === -1, 'Test 14');

const returned5 = obj.addNumber('0');
console.assert(returned5 === false, 'Test 15');

const returned6 = obj.addNumber(true);
console.assert(returned6 === false, 'Test 16');

const returned7 = obj.addNumber(null);
console.assert(returned7 === false, 'Test 17');

const returned8 = obj.addNumber(undefined);
console.assert(returned8 === false, 'Test 18');

console.assert(obj.state.all.length === 4, 'Test 19');
console.assert(obj.state.biggest === 1, 'Test 20');
console.assert(obj.state.smallest === -1, 'Test 21');


```

[TOP](#encapsulation/javascripting)

---

## read-from-1.js - fail

* [review source](read-from-1.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
```

```js
const obj = {
  a: 0,
  getA: function () { },
  sumAB: function (b) { },
};

const test1 = obj.getA() === 0;
console.assert(test1, 'Test 1');

const test2 = obj.sumAB(1) === 1;
console.assert(test2, 'Test 2');

obj.a = 4;

const test3 = obj.getA() === 4;
console.assert(test3, 'Test 3');

const test4 = obj.sumAB(1) === 5;
console.assert(test4, 'Test 4');

obj.a = -2;

const test5 = obj.getA() === -2;
console.assert(test5, 'Test 5');

const test6 = obj.sumAB(1) === -1;
console.assert(test6, 'Test 6');

```

[TOP](#encapsulation/javascripting)

---

## read-from-2.js - fail

* [review source](read-from-2.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
+ PASS: Test 3
- FAIL: Test 4
- FAIL: Test 5
+ PASS: Test 6
- FAIL: Test 7
- FAIL: Test 8
```

```js
const obj = {
  word: '',
  getWord: function () { },
  concat: function (secondHalf) { },
};

const test1 = obj.getWord() === 'the word is ';
console.assert(test1, `Test 1`);

const test2 = obj.concat('--') === '--';
console.assert(test2, `Test 2`);

const test3 = obj.word === '';
console.assert(test3, 'Test 3');

obj.word = 'hoy';

const test4 = obj.getWord() === 'the word is hoy';
console.assert(test4, `Test 4`);

const test5 = obj.concat('()') === 'hoy()';
console.assert(test5, `Test 5`);

const test6 = obj.word === 'hoy';
console.assert(test6, 'Test 6');

obj.word = ':)';

const test7 = obj.getWord() === 'the word is :)';
console.assert(test7, 'Test 7');

const test8 = obj.concat('-<-<') === ':)-<-<';
console.assert(test8, 'Test 8');

```

[TOP](#encapsulation/javascripting)

---

## read-from-3.js - error

* [review source](read-from-3.js)

```txt
- FAIL: Test 1
+ PASS: Test 2
TypeError: Cannot read property '0' of undefined
    at Object.<anonymous> ( [...] /object-method-exercises/read-from-3.js:17:27)
    at Module._compile (internal/modules/cjs/loader.js:777:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:788:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at evaluateFile ( [...] /review.js:101:5)
    at  [...] /review.js:139:28
    at Array.map (<anonymous>)
```

```js
const obj = {
  array: ['hi!'],
  getArray: function () { },
  getCopy: function () { },
};

const returnedArray1 = obj.getArray();

const test1 = returnedArray1 === obj.array;
console.assert(test1, 'Test 1');

const copiedArray1 = obj.getCopy();

const test2 = copiedArray1 !== obj.array;
console.assert(test2, 'Test 2');

const test3 = copiedArray1[0] === obj.array[0];
console.assert(test3, 'Test 3');

obj.array = [0, 1];
const returnedArray2 = obj.getArray();

const test4 = returnedArray2 === obj.array;
console.assert(test4, 'Test 4');

const copiedArray2 = obj.getCopy();

console.assert(copiedArray2 !== obj.array, 'Test 5');
console.assert(copiedArray2[0] === obj.array[0], 'Test 6');
console.assert(copiedArray2[1] === obj.array[1], 'Test 7');

obj.array = [null, undefined, false];
const returnedArray3 = obj.getArray();

const test8 = returnedArray3 === obj.array;
console.assert(test8, 'Test 8');

const copiedArray3 = obj.getCopy();
console.assert(copiedArray3 !== obj.array, 'Test 9');
console.assert(copiedArray3[0] === obj.array[0], 'Test 10');
console.assert(copiedArray3[1] === obj.array[1], 'Test 11');
console.assert(copiedArray3[2] === obj.array[2], 'Test 12');

```

[TOP](#encapsulation/javascripting)

---

## write-to-1.js - fail

* [review source](write-to-1.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
```

```js
const obj = {
  string: '',
  setString: function (str) { },
  remixString: function (mixer) { }
};

obj.setString('hoy');
console.assert(obj.string === 'hoy', 'Test 1');

obj.setString('mimi');
console.assert(obj.string === 'mimi', 'Test 2');

obj.remixString('|');
console.assert(obj.string === 'm|i|m|i', 'Test 3');

obj.setString('-_-');
console.assert(obj.string === '-_-', 'Test 4');

obj.remixString('.');
console.assert(obj.string === '-._.-', 'Test 5');

obj.remixString(`'`);
console.assert(obj.string === `-'.'_'.'-`, 'Test 6');

obj.setString(obj.string);
console.assert(obj.string === `-'.'_'.'-`, 'Test 7');

```

[TOP](#encapsulation/javascripting)

---

## write-to-2.js - fail

* [review source](write-to-2.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
- FAIL: Test 10
+ PASS: Test 11
```

```js

const obj = {
  number: 5,
  mod: 0,
  equals: 0,
  setNumber: function (num) { },
  modulo: function (modder) { }
};

obj.modulo(2);
console.assert(obj.mod === 2, 'Test 1');
console.assert(obj.equals === 1, 'Test 2');

obj.setNumber(10);
console.assert(obj.number === 10, 'Test 3');

obj.setNumber(2);
console.assert(obj.number === 2, 'Test 4');
console.assert(obj.mod === 2, 'Test 5');
console.assert(obj.equals === 1, 'Test 6');

obj.modulo(6);
console.assert(obj.mod === 6, 'Test 7');
console.assert(obj.equals === 2, 'Test 8');

obj.modulo(obj.number);
console.assert(obj.number === 2, 'Test 9');
console.assert(obj.mod === 2, 'Test 10');
console.assert(obj.equals === 0, 'Test 11');

```

[TOP](#encapsulation/javascripting)

---

## write-to-3.js - fail

* [review source](write-to-3.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
- FAIL: Test 6
- FAIL: Test 7
- FAIL: Test 8
- FAIL: Test 9
- FAIL: Test 10
- FAIL: Test 11
- FAIL: Test 12
- FAIL: Test 13
- FAIL: Test 14
```

```js
const obj = {
  arr: [1, 0],
  merge: function (toMerge) { },
  replace: function (newArr) { },
};

obj.merge([4]);
console.assert(obj.arr[0] === 4, 'Test 1');
console.assert(obj.arr[1] === 1, 'Test 2');
console.assert(obj.arr[2] === 0, 'Test 3');

obj.replace(['hi!', 'bye!']);
console.assert(obj.arr[0] === 'hi!', 'Test 4');
console.assert(obj.arr[1] === 'bye!', 'Test 5');

obj.merge([null]);
console.assert(obj.arr[0] === null, 'Test 6');
console.assert(obj.arr[1] === 'hi!', 'Test 7');
console.assert(obj.arr[2] === 'bye!', 'Test 8');

obj.merge(obj.arr);
console.assert(obj.arr[0] === null, 'Test 9');
console.assert(obj.arr[1] === 'hi!', 'Test 10');
console.assert(obj.arr[2] === 'bye!', 'Test 11');
console.assert(obj.arr[3] === null, 'Test 12');
console.assert(obj.arr[4] === 'hi!', 'Test 13');
console.assert(obj.arr[5] === 'bye!', 'Test 14');

```

[TOP](#encapsulation/javascripting)

