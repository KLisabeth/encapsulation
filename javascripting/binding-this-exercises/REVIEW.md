# encapsulation/javascripting/

> 3/30/2020, 10:36:03 AM 

## binding-this-exercises/ - error

* [../REVIEW.md](../REVIEW.md)

### files

* [challenge-1.js](#challenge-1js---fail) - fail
* [challenge-2.js](#challenge-2js---error) - error
* [challenge-3.js](#challenge-3js---fail) - fail
* [challenge-4.js](#challenge-4js---error) - error

---

## challenge-1.js - fail

* [review source](challenge-1.js)

```txt
- FAIL: Test 1.A
- FAIL: Test 1.B
- FAIL: Test 2.A
- FAIL: Test 2.B
- FAIL: Test 3.A
- FAIL: Test 3.B
```

```js
// psst. use the debugger!

function writeMe(arg) { };

// don't change any code below this comment
const obj1 = { thing: 1 };
const bound1 = writeMe.bind(obj1);

const result1a = bound1(4);
const test1a = result1a === 5;
console.assert(test1a, 'Test 1.A');

const result1b = bound1('');
const test1b = result1b === '1';
console.assert(test1b, 'Test 1.B');


const obj2 = { thing: 2 };
const bound2 = writeMe.bind(obj2);

const result2a = bound2(true);
const test2a = result2a === 3;
console.assert(test2a, 'Test 2.A');

const result2b = bound2(-1);
const test2b = result2b === 1;
console.assert(test2b, 'Test 2.B');


const obj3 = { thing: 3 };
const bound3 = writeMe.bind(obj3);

const result3a = bound3(null);
const test3a = result3a === 3;
console.assert(test3a, 'Test 3.A');

const result3b = bound3(undefined);
const test3b = Number.isNaN(result3b);
console.assert(test3b, 'Test 3.B');

```

[TOP](#encapsulation/javascripting)

---

## challenge-2.js - error

* [review source](challenge-2.js)

```txt
ReferenceError: boundA is not defined
    at Object.<anonymous> ( [...] /binding-this-exercises/challenge-2.js:15:17)
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
// psst. use the debugger!

// don't change this code
const objA = { thing: '' };
const objB = { thing: 3 };
const objC = { thing: false };

// do write code here

function writeMe() { }


// don't change this code

const result1 = boundA() + 1;
const test1 = result1 === '1';
console.assert(test1, 'Test 1');

const result2 = boundA() + false;
const test2 = result2 === 'false';
console.assert(test2, 'Test 2');

const result3 = boundB() + undefined;
const test3 = Number.isNaN(result3);
console.assert(test3, 'Test 3');

const result4 = boundB() + '';
const test4 = result4 === '3';
console.assert(test4, 'Test 4');

const result5 = boundC() + null;
const test5 = result5 === 0;
console.assert(test5, 'Test 5');

const result6 = boundC() + 12;
const test6 = result6 === 12;
console.assert(test6, 'Test 6');

```

[TOP](#encapsulation/javascripting)

---

## challenge-3.js - fail

* [review source](challenge-3.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
- FAIL: Test 5
```

```js
// add or change properties in the objects to pass the asserts
//   psst. use the debugger!

const obj1 = {
  id: 1,
  x: true
};

const obj2 = {
  id: 2,
  list: [1, 2, 3],
};

const obj3 = {
  id: 3,
};

// don't change any code below this comment
function returnThis() { return this; }

const bound1 = returnThis.bind(obj1);
const bound2 = returnThis.bind(obj2);
const bound3 = returnThis.bind(obj3);

const this1 = bound1();
const this2 = bound2();
const this3 = bound3();


const test1 = this1.x === false;
console.assert(test1, 'Test 1');

const test2 = this3.foo === 'bar';
console.assert(test2, 'Test 2');

const test3 = JSON.stringify(this2.list) === '[3,2,1]';
console.assert(test3, 'Test 3');

const test4 = this3.friend === obj2;
console.assert(test4, 'Test 4');

const test5 = this2.friend === this1;
console.assert(test5, 'Test 5');

```

[TOP](#encapsulation/javascripting)

---

## challenge-4.js - error

* [review source](challenge-4.js)

```txt
TypeError: Cannot read property 'bind' of undefined
    at Object.<anonymous> ( [...] /binding-this-exercises/challenge-4.js:8:32)
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
// this one is extra tricky
//  move on to Binding Arguments if it's taking more than a few mintues
//  you can always come back to it later

const obj = {};

// don't change the code below this line
const boundMethod = obj.method.bind(obj);

const test0 = obj.current === 0;
console.assert(test0, 'Test 0');

const result1 = boundMethod(3);
const test1a = obj.current === 3;
const test1b = result1 === -3;
console.assert(test1a, 'Test 1.A');
console.assert(test1b, 'Test 1.B');

const result2 = boundMethod(2);
const test2a = obj.current === 5;
const test2b = result2 === 1;
console.assert(test2a, 'Test 2.A');
console.assert(test2b, 'Test 2.B');

const result3 = boundMethod(1);
const test3a = obj.current === 6;
const test3b = result3 === 4;
console.assert(test3a, 'Test 3.A');
console.assert(test3b, 'Test 3.B');

```

[TOP](#encapsulation/javascripting)

