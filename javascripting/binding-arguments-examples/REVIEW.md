# encapsulation/javascripting/

> 3/30/2020, 10:36:03 AM 

## binding-arguments-examples/ - pass

* [../REVIEW.md](../REVIEW.md)

### files

* [1-save-arguments-for-later.js](#1-save-arguments-for-laterjs---pass) - pass
* [2-partial-application.js](#2-partial-applicationjs---pass) - pass
* [3-even-and-odd.js](#3-even-and-oddjs---pass) - pass

---

## 1-save-arguments-for-later.js - pass

* [review source](1-save-arguments-for-later.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
// .bind takes arguments after the object for "this"
//  they are used as arguments when you later call the function

function addToWord(letter) {
  this.word += letter;
}

const obj1 = {
  word: '1'
};

const boundObj1x = addToWord.bind(obj1, 'x');
const boundObj1y = addToWord.bind(obj1, 'y');

boundObj1x();
console.assert(obj1.word === '1x', 'Test 1');

boundObj1x();
console.assert(obj1.word === '1xx', 'Test 2');

boundObj1y();
console.assert(obj1.word === '1xxy', 'Test 3');


const obj2 = {
  word: '2'
};

const boundObj2a = addToWord.bind(obj2, 'a');
const boundObj2b = addToWord.bind(obj2, 'b');

boundObj2a();
console.assert(obj2.word === '2a', 'Test 4');

boundObj2b();
console.assert(obj2.word === '2ab', 'Test 5');

boundObj2a();
console.assert(obj2.word === '2aba', 'Test 6');


```

[TOP](#encapsulation/javascripting)

---

## 2-partial-application.js - pass

* [review source](2-partial-application.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
// if you pass in fewer arguments than the function requires
//  you can pass the remaining ones in later
//  this is called "Partial Application"

function addToWord(boundArgument, freeArgument) {
  this.word += boundArgument + freeArgument;
}

const obj1 = {
  word: '1'
};

const boundObj1x = addToWord.bind(obj1, 'x');
const boundObj1y = addToWord.bind(obj1, 'y');

boundObj1x('A');
console.assert(obj1.word === '1xA', 'Test 1');

boundObj1x('B');
console.assert(obj1.word === '1xAxB', 'Test 2');

boundObj1y('C');
console.assert(obj1.word === '1xAxByC', 'Test 3');


const obj2 = {
  word: '2'
};

const boundObj2a = addToWord.bind(obj2, 'a');
const boundObj2b = addToWord.bind(obj2, 'b');

boundObj2a('X');
console.assert(obj2.word === '2aX', 'Test 4');

boundObj2b('Y');
console.assert(obj2.word === '2aXbY', 'Test 5');

boundObj2a('Z');
console.assert(obj2.word === '2aXbYaZ', 'Test 6');


```

[TOP](#encapsulation/javascripting)

---

## 3-even-and-odd.js - pass

* [review source](3-even-and-odd.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
const evenAndOdd = {
  state: {
    even: [],
    odd: [],
    nany: []
  },
  pushTo: function (kind, value) {
    this.state[kind].push(value);
  }
};


evenAndOdd.pushTo('even', '2');
evenAndOdd.pushTo('odd', '1');
evenAndOdd.pushTo('nany', 'e');

const test1 = JSON.stringify(evenAndOdd.state.even) === '["2"]';
console.assert(test1, 'Test 1');
const test2 = JSON.stringify(evenAndOdd.state.odd) === '["1"]';
console.assert(test2, 'Test 2');
const test3 = JSON.stringify(evenAndOdd.state.nany) === '["e"]';
console.assert(test3, 'Test 3');


const boundWithEven = evenAndOdd.pushTo.bind(evenAndOdd, 'even');
const boundWithOdd = evenAndOdd.pushTo.bind(evenAndOdd, 'odd');
const boundWithNany = evenAndOdd.pushTo.bind(evenAndOdd, 'nany');

boundWithEven('4');
boundWithEven('6');
boundWithOdd('3');
boundWithOdd('5');
boundWithNany('f');
boundWithNany('g');

const test4 = JSON.stringify(evenAndOdd.state.even) === '["2","4","6"]';
console.assert(test4, 'Test 4');
const test5 = JSON.stringify(evenAndOdd.state.odd) === '["1","3","5"]';
console.assert(test5, 'Test 5');
const test6 = JSON.stringify(evenAndOdd.state.nany) === '["e","f","g"]';
console.assert(test6, 'Test 6');

```

[TOP](#encapsulation/javascripting)

