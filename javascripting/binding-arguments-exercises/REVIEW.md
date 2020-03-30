# encapsulation/javascripting/

> 3/30/2020, 10:36:03 AM 

## binding-arguments-exercises/ - error

* [../REVIEW.md](../REVIEW.md)

### files

* [challenge-1.js](#challenge-1js---fail) - fail
* [challenge-2.js](#challenge-2js---error) - error
* [challenge-3.js](#challenge-3js---error) - error
* [challenge-4.js](#challenge-4js---error) - error

---

## challenge-1.js - fail

* [review source](challenge-1.js)

```txt
- FAIL: Test 1
- FAIL: Test 2
- FAIL: Test 3
- FAIL: Test 4
```

```js
// psst. use the debugger!

function writeMe(boundArg, freeArg) { }

// don't change any code below this comment
const obj1 = { thing: 1 };
const obj2 = { thing: 2 };

const bound1A = writeMe.bind(obj1, 'A');
const bound1B = writeMe.bind(obj1, 'B');
const bound2C = writeMe.bind(obj2, 'C');
const bound2D = writeMe.bind(obj2, 'D');

const result1 = bound1A(' :)');
const test1 = result1 === '1A :)';
console.assert(test1, 'Test 1');

const result2 = bound1B(' :(');
const test2 = result2 === '1B :(';
console.assert(test2, 'Test 2');

const result3 = bound2C(' :O');
const test3 = result3 === '2C :O';
console.assert(test3, 'Test 3');

const result4 = bound2D(' :p');
const test4 = result4 === '2D :p';
console.assert(test4, 'Test 4');

```

[TOP](#encapsulation/javascripting)

---

## challenge-2.js - error

* [review source](challenge-2.js)

```txt
ReferenceError: bound1 is not defined
    at Object.<anonymous> ( [...] /binding-arguments-exercises/challenge-2.js:18:17)
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
const obj1 = { thing: '' };
const obj2 = { thing: 0 };
const obj3 = { thing: true };

function addThem(boundArg, freeArg) {
  return this.thing + boundArg + freeArg;
}

// do write code here



// don't change this code

const result1 = bound1(1);
const test1 = result1 === '_1';
console.assert(test1, 'Test 1');

const result2 = bound1(false);
const test2 = result2 === '_false';
console.assert(test2, 'Test 2');

const result3 = bound2(2);
const test3 = result3 === 3;
console.assert(test3, 'Test 3');

const result4 = bound2(-1);
const test4 = result4 === 0;
console.assert(test4, 'Test 4');

const result5 = bound3(null);
const test5 = result5 === 'truenull';
console.assert(test5, 'Test 5');

const result6 = bound3(12);
const test6 = result6 === 'true12';
console.assert(test6, 'Test 6');

```

[TOP](#encapsulation/javascripting)

---

## challenge-3.js - error

* [review source](challenge-3.js)

```txt
TypeError: Cannot read property 'bind' of undefined
    at Object.<anonymous> ( [...] /binding-arguments-exercises/challenge-3.js:6:32)
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

const obj = {};

// don't change the code below this line
const boundMethod = obj.method.bind(obj, 1);

const test0 = obj.current === 0;
console.assert(test0, 'Test 0');

const result1 = boundMethod(3);
const test1a = obj.current === 4;
const test1b = result1 === -2;
console.assert(test1a, 'Test 1.A');
console.assert(test1b, 'Test 1.B');

const result2 = boundMethod(2);
const test2a = obj.current === 6;
const test2b = result2 === 2;
console.assert(test2a, 'Test 2.A');
console.assert(test2b, 'Test 2.B');

const result3 = boundMethod(1);
const test3a = obj.current === 7;
const test3b = result3 === 5;
console.assert(test3a, 'Test 3.A');
console.assert(test3b, 'Test 3.B');

```

[TOP](#encapsulation/javascripting)

---

## challenge-4.js - error

* [review source](challenge-4.js)

```txt
TypeError: Cannot read property 'bind' of undefined
    at Object.<anonymous> ( [...] /binding-arguments-exercises/challenge-4.js:6:32)
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

const obj = {};

// don't change the code below this line
const boundMethod = obj.method.bind(obj, -1);

const test0 = obj.current === 0;
console.assert(test0, 'Test 0');

const result1 = boundMethod(3);
const test1a = obj.current === 2;
const test1b = result1 === -2;
console.assert(test1a, 'Test 1.A');
console.assert(test1b, 'Test 1.B');

const result2 = boundMethod(2);
const test2a = obj.current === 3;
const test2b = result2 === 1;
console.assert(test2a, 'Test 2.A');
console.assert(test2b, 'Test 2.B');

const result3 = boundMethod(1);
const test3a = obj.current === 3;
const test3b = result3 === 3;
console.assert(test3a, 'Test 3.A');
console.assert(test3b, 'Test 3.B');

```

[TOP](#encapsulation/javascripting)

