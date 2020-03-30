# encapsulation/javascripting/

> 3/30/2020, 10:36:03 AM 

## object-method-examples/ - pass

* [../REVIEW.md](../REVIEW.md)

### files

* [1-sum.js](#1-sumjs---pass) - pass
* [2-name-tag.js](#2-name-tagjs---pass) - pass
* [3-types.js](#3-typesjs---pass) - pass
* [4-big-small.js](#4-big-smalljs---pass) - pass
* [5-entries.js](#5-entriesjs---pass) - pass
* [6-searchable.js](#6-searchablejs---pass) - pass
* [7-method-reuse.js](#7-method-reusejs---pass) - pass

---

## 1-sum.js - pass

* [review source](1-sum.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
// psst, be sure to use JS Tutor or Debugger!

const sum = {
  total: 0,
  addNewValue: function (newValue) {
    this.total = this.total + newValue;
  }
};

sum.addNewValue(-1);
sum.addNewValue(2);
const testingValue1 = sum.total === 1;
console.assert(testingValue1, 'Test 1');


sum.addNewValue(-1);
const testingValue2 = sum.total === 0;
console.assert(testingValue2, 'Test 2');

sum.addNewValue(100);
const testingValue3 = sum.total === 100;
console.assert(testingValue3, 'Test 3');

sum.addNewValue(-150);
const testingValue4 = sum.total === -50;
console.assert(testingValue4, 'Test 4');

```

[TOP](#encapsulation/javascripting)

---

## 2-name-tag.js - pass

* [review source](2-name-tag.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
// psst, be sure to use JS Tutor or Debugger!

const nameTag = {
  first: '',
  last: '',
  getName: function () {
    const fullName = this.first + ' ' + this.last;
    return fullName;
  },
  setName: function (newName) {
    const splitNewName = newName.split(',');
    const newFirst = splitNewName[0];
    const newLast = splitNewName[1];
    this.first = newFirst;
    this.last = newLast;
  }
};

const fullName1 = nameTag.getName();
const testingName1 = fullName1 === ' ';
console.assert(testingName1, 'Test 1');

nameTag.setName('hi,bye');
const fullName2 = nameTag.getName();
const testingName2 = fullName2 === 'hi bye';
console.assert(testingName2, 'Test 2');

nameTag.setName(',two');
const fullName3 = nameTag.getName();
const testingName3 = fullName3 === ' two';
console.assert(testingName3, 'Test 3');

nameTag.setName('one,');
const fullName4 = nameTag.getName();
const testingName4 = fullName4 === 'one ';
console.assert(testingName4, 'Test 4');

const finalFirstIsOne = nameTag.first === 'one';
const finalLastIsEmpty = nameTag.last === '';
console.assert(finalFirstIsOne, 'Test 5');
console.assert(finalLastIsEmpty, 'Test 6');

```

[TOP](#encapsulation/javascripting)

---

## 3-types.js - pass

* [review source](3-types.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
```

```js
// psst, be sure to use JS Tutor or Debugger!

const types = {
  "string": [],
  "number": [],
  "boolean": [],
  "undefined": [],
  "object": [],
  addNewValue: function (newValue) {
    const type = typeof newValue;
    this[type].push(newValue);
  },
};

types.addNewValue('hi');
types.addNewValue('bye');
types.addNewValue('');
types.addNewValue('4');
const stringsTest = types.string[0] === 'hi'
  && types.string[1] === 'bye'
  && types.string[2] === ''
  && types.string[3] === '4';
console.assert(stringsTest, 'Test 1');


types.addNewValue(Infinity);
types.addNewValue(NaN);
types.addNewValue(0);
types.addNewValue(12.3);
const numbersTest = types.number[0] === Infinity
  && Number.isNaN(types.number[1])
  && types.number[2] === 0
  && types.number[3] === 12.3;
console.assert(numbersTest, 'Test 2');


types.addNewValue(true);
types.addNewValue(false);
const booleansTest = types.boolean[0] === true
  && types.boolean[1] === false;
console.assert(booleansTest, 'Test 3');


types.addNewValue(undefined);
types.addNewValue();
const undefinedTest = types.undefined[0] === undefined
  && types.undefined[1] === undefined;
console.assert(undefinedTest, 'Test 4');


types.addNewValue(null);
const nullTest = types.object[0] === null;
console.assert(nullTest, 'Test 5');


```

[TOP](#encapsulation/javascripting)

---

## 4-big-small.js - pass

* [review source](4-big-small.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
```

```js
// psst, be sure to use JS Tutor or Debugger!

const bigSmall = {
  smallest: Infinity,
  biggest: -Infinity,
  all: [],
  addNumber: function (newNumber) {
    this.all.push(newNumber);
    if (newNumber > this.biggest) {
      this.biggest = newNumber;
    }
    if (newNumber < this.smallest) {
      this.smallest = newNumber;
    }
  },
};


bigSmall.addNumber(0);
const biggestTest1 = bigSmall.biggest === 0;
const smallestTest1 = bigSmall.smallest === 0;
console.assert(biggestTest1 && smallestTest1, 'Test 1');

bigSmall.addNumber(1);
const biggestTest2 = bigSmall.biggest === 1;
const smallestTest2 = bigSmall.smallest === 0;
console.assert(biggestTest2 && smallestTest2, 'Test 2');

bigSmall.addNumber(0.5);
const biggestTest3 = bigSmall.biggest === 1;
const smallestTest3 = bigSmall.smallest === 0;
console.assert(biggestTest3 && smallestTest3, 'Test 3');

bigSmall.addNumber(-1);
const biggestTest4 = bigSmall.biggest === 1;
const smallestTest4 = bigSmall.smallest === -1;
console.assert(biggestTest4 && smallestTest4, 'Test 4');

bigSmall.addNumber(0);
const biggestTest5 = bigSmall.biggest === 1;
const smallestTest5 = bigSmall.smallest === -1;
console.assert(biggestTest5 && smallestTest5, 'Test 5');

bigSmall.addNumber(Infinity);
const biggestTest6 = bigSmall.biggest === Infinity;
const smallestTest6 = bigSmall.smallest === -1;
console.assert(biggestTest6 && smallestTest6, 'Test 6');

bigSmall.addNumber(-Infinity);
const biggestTest7 = bigSmall.biggest === Infinity;
const smallestTest7 = bigSmall.smallest === -Infinity;
console.assert(biggestTest7 && smallestTest7, 'Test 7');

```

[TOP](#encapsulation/javascripting)

---

## 5-entries.js - pass

* [review source](5-entries.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
```

```js
const manager = {
  entries: {},
  setEntry: function (key, value) {
    this.entries[key] = value;
  },
  deleteEntry: function (key) {
    delete this.entries[key];
  },
  readEntry: function (key) {
    return this.entries[key];
  },
  stringifyEntries: function () {
    return JSON.stringify(this.entries);
  }
};

manager.setEntry('a', 0);
manager.setEntry('b', 1);
manager.setEntry('c', 2);
const test1 = manager.stringifyEntries() === '{"a":0,"b":1,"c":2}';
console.assert(test1, 'Test 1');

manager.deleteEntry('b');
const test2 = manager.stringifyEntries() === '{"a":0,"c":2}';
console.assert(test2, 'Test 2');

manager.setEntry('c', 4);
manager.setEntry('d', 5);
const test3 = manager.stringifyEntries() === '{"a":0,"c":4,"d":5}';
console.assert(test3, 'Test 3');

const readB = manager.readEntry('b');
const test4 = readB === undefined;
console.assert(test4, 'Test 4');

const readA = manager.readEntry('a');
const test5 = readA === 0;
console.assert(test5, 'Test 5');

manager.setEntry('b', true);
manager.setEntry('a', false);
manager.deleteEntry('c');
const test6 = manager.stringifyEntries() === '{"a":false,"d":5,"b":true}';
console.assert(test6, 'Test 6');

manager.deleteEntry('a');
manager.deleteEntry('d');
manager.deleteEntry('b');
const test7 = manager.stringifyEntries() === '{}';
console.assert(test7, 'Test 7');

```

[TOP](#encapsulation/javascripting)

---

## 6-searchable.js - pass

* [review source](6-searchable.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
// psst, be sure to use JS Tutor or Debugger!
//  (challenge)

const searchable = {
  query: '',
  matching: [],
  all: [],
  addWord: function (newWord) {
    this.all.push(newWord);
    const newMatching = this.findAllMatching();
    this.matching = newMatching;
  },
  setQuery: function (newQuery) {
    this.query = newQuery;
    const newMatching = this.findAllMatching();
    this.matching = newMatching;
  },
  findAllMatching: function () {
    const query = this.query;
    const isMatching = string => string.includes(query);
    const matchingEntries = this.all.filter(isMatching);
    return matchingEntries;
  }
};


const allLength1 = searchable.all.length === 0;
const matchingLength1 = searchable.matching.length === 0;
console.assert(allLength1 && matchingLength1, 'Test 1');

searchable.addWord('hi!');
searchable.addWord('hi');
const allLength2 = searchable.all.length === 2;
const matchingLength2 = searchable.matching.length === 2;
console.assert(allLength2 && matchingLength2, 'Test 2');

searchable.setQuery('!');
const allLength3 = searchable.all.length === 2;
const matchingLength3 = searchable.matching.length === 1;
console.assert(allLength3 && matchingLength3, 'Test 3');

searchable.addWord('hi?');
const allLength4 = searchable.all.length === 3;
const matchingLength4 = searchable.matching.length === 1;
console.assert(allLength4 && matchingLength4, 'Test 4');

searchable.setQuery('hi');
const allLength5 = searchable.all.length === 3;
const matchingLength5 = searchable.matching.length === 3;
console.assert(allLength5 && matchingLength5, 'Test 5');

searchable.setQuery('bye');
const allLength6 = searchable.all.length === 3;
const matchingLength6 = searchable.matching.length === 0;
console.assert(allLength6 && matchingLength6, 'Test 6');

```

[TOP](#encapsulation/javascripting)

---

## 7-method-reuse.js - pass

* [review source](7-method-reuse.js)

```txt
+ PASS: It can retrieve numbers.
+ PASS: It can retrieve even numbers.
+ PASS: It can retrieve sum of numbers.
+ PASS: It can retrieve sum of even numbers.
```

```js
function sum(total, value) {
  return total + value;
}


const object = {
  _numbers: [],
  addNumber(value) {
    this._numbers.push(value);
  },
  getNumbers() {
    return this._numbers;
  },
  getEvenNumbers() {
    return this.getNumbers().filter(value => value %2 === 0);
  },
  sum() {
    return this.getNumbers().reduce(sum, 0);
  },
  sumOfEvenNumbers() {
    return this.getEvenNumbers().reduce(sum, 0);
  },
};

object.addNumber(2);
object.addNumber(3);
object.addNumber(4);
object.addNumber(1);

console.assert(object.getNumbers().toString() == [2, 3, 4, 1].toString(), 'It can retrieve numbers.');
console.assert(object.getEvenNumbers().toString() == [2, 4].toString(), 'It can retrieve even numbers.');

console.assert(object.sum() === 10, 'It can retrieve sum of numbers.');
console.assert(object.sumOfEvenNumbers() === 6, 'It can retrieve sum of even numbers.');
```

[TOP](#encapsulation/javascripting)

