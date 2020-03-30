# encapsulation/javascripting/

> 3/30/2020, 10:36:03 AM 

## binding-this-examples/ - error

* [../REVIEW.md](../REVIEW.md)

### files

* [1-this-is-dynamic.js](#1-this-is-dynamicjs---error) - error
* [2-binding-creates-a-new-function.js](#2-binding-creates-a-new-functionjs---error) - error
* [3-binding-makes-this-permanent.js](#3-binding-makes-this-permanentjs---error) - error
* [4-removing-methods-from-objects.js](#4-removing-methods-from-objectsjs---pass) - pass
* [5-accessing-bound-properties.js](#5-accessing-bound-propertiesjs---pass) - pass
* [6-counter-object.js](#6-counter-objectjs---fail) - fail

---

## 1-this-is-dynamic.js - error

* [review source](1-this-is-dynamic.js)

```txt
ReferenceError: window is not defined
    at Object.<anonymous> ( [...] /binding-this-examples/1-this-is-dynamic.js:15:44)
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
// in es5 functions, 'this' is dynamic
//  it's value changes depending on where you call the function

// PS. this snippet is written to run in the browser
//  to run it in JS Tutor: replace window with undefined
//  to run it in Node.js: replace window with global
//  horray for JS compatibility!

function returnThis() {
  return this;
}


const calledGlobally1 = returnThis();
const returnsWindow1 = calledGlobally1 === window;
console.assert(returnsWindow1, 'called globally 1');


const obj1 = {
  id: 1,
  returnThis
};

const calledOnObj1 = obj1.returnThis();
const returnsObj1 = calledOnObj1 === obj1;
console.assert(returnsObj1, 'called on object 1');


const obj2 = { id: 2 };
obj2.method = returnThis;

const calledOnObj2 = obj2.method();
const returnsObj2 = calledOnObj2 === obj2;
console.assert(returnsObj2, 'called on object 2');


const calledGlobally2 = returnThis();
const returnsWindow2 = calledGlobally2 === window;
console.assert(returnsWindow2, 'called globally 2');


const alwaysTheSameFunction = returnThis === obj1.returnThis
  && obj1.returnThis === obj2.method;
console.assert(alwaysTheSameFunction, 'always the same function!');


```

[TOP](#encapsulation/javascripting)

---

## 2-binding-creates-a-new-function.js - error

* [review source](2-binding-creates-a-new-function.js)

```txt
ReferenceError: window is not defined
    at Object.<anonymous> ( [...] /binding-this-examples/2-binding-creates-a-new-function.js:13:39)
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
// binding returns a new function just like the old function
//   but "this" is permanent!

// PS. this snippet is written to run in the browser
//  to run it in JS Tutor: replace window with window
//  to run it in Node.js: replace window with global
//  horray for JS compatibility!

function returnThis() {
  return this;
}

const boundToWindow = returnThis.bind(window);
const boundToWindowReturns = boundToWindow();
console.assert(boundToWindow !== returnThis, 'boundToWindow is a new function ...');
console.assert(boundToWindowReturns === window, '... "this" is always window');

const obj1 = { id: 1 };
const boundToObj1 = returnThis.bind(obj1);
const boundToObj1Returns = boundToObj1();
console.assert(boundToObj1 !== returnThis, 'boundToObj1 is a new function ...');
console.assert(boundToObj1Returns === obj1, '... "this" is always obj1');

const obj2 = { id: 2 };
const boundToObj2 = returnThis.bind(obj2);
const boundToObj2Returns = boundToObj2();
console.assert(boundToObj2 !== returnThis, 'boundToObj2 is a new function ...');
console.assert(boundToObj2Returns === obj2, '... "this" is always obj2');


```

[TOP](#encapsulation/javascripting)

---

## 3-binding-makes-this-permanent.js - error

* [review source](3-binding-makes-this-permanent.js)

```txt
ReferenceError: window is not defined
    at Object.<anonymous> ( [...] /binding-this-examples/3-binding-makes-this-permanent.js:12:39)
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
// bound functions will always have the same "this" no matter what

// PS. this snippet is written to run in the browser
//  to run it in JS Tutor: replace window with window
//  to run it in Node.js: replace window with global
//  horray for JS compatibility!

function returnThis() {
  return this;
}

const boundToWindow = returnThis.bind(window);

const obj1 = { id: 1 };
const boundToObj1 = returnThis.bind(obj1);

const obj2 = { id: 2 };
const boundToObj2 = returnThis.bind(obj2);


const obj3 = {
  id: 3,
  returnThis,
  boundToWindow,
  boundToObj1,
  boundToObj2
};

const thisObj3 = obj3.returnThis();
const test1 = thisObj3 === obj3;
console.assert(test1, 'Test 1');

const thisWindow = obj3.boundToWindow();
const test2 = thisWindow === window;
console.assert(test2, 'Test 2');

const thisObj1 = obj3.boundToObj1()
const test3 = thisObj1 === obj1;
console.assert(test3, 'Test 3');

const thisObj2 = obj3.boundToObj2();
const test4 = thisObj2 === obj2;
console.assert(test4, 'Test 4');

```

[TOP](#encapsulation/javascripting)

---

## 4-removing-methods-from-objects.js - pass

* [review source](4-removing-methods-from-objects.js)

```txt
+ PASS: Test 1
+ PASS: obj1 & obj2 reference the same function
+ PASS: Test 2
+ PASS: obj2 & obj3 reference the same function
+ PASS: Test 3
+ PASS: the variable and method reference the same function
```

```js
// moving functions between objects changes this
// note: global variables are properties on the main object!
//  in Node it's called global
//  in the Browser it's called window
//  in JS Tutor it's undefined

const obj1 = {
  id: 1,
  method: function () {
    return this;
  }
};

const test1 = obj1.method();
console.assert(test1 === obj1, 'Test 1');


const obj2 = { id: 2 };
obj2.method = obj1.method;
console.assert(obj2.method === obj1.method, 'obj1 & obj2 reference the same function');

const test2 = obj2.method();
console.assert(test2 === obj2, 'Test 2');


const obj3 = { id: 3 };
obj3.method = obj2.method;
console.assert(obj3.method === obj2.method, 'obj2 & obj3 reference the same function');

const test3 = obj3.method();
console.assert(test3 === obj3, 'Test 3');


const asAFreeFunction = obj1.method;
console.assert(asAFreeFunction === obj1.method, 'the variable and method reference the same function');


```

[TOP](#encapsulation/javascripting)

---

## 5-accessing-bound-properties.js - pass

* [review source](5-accessing-bound-properties.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
```

```js
// to reuse an object's method as you would expect, you need to bind it
//  this is mega important for event handlers

const obj1 = {
  id: 'a',
  readId: function () {
    return this.id;
  },
  writeId: function (newId) {
    this.id = newId;
  }
};
console.assert(obj1.readId() === 'a', 'Test 1');
obj1.writeId('x');
console.assert(obj1.readId() === 'x', 'Test 2');


const obj2 = { id: 'b' };
obj2.readId = obj1.readId;
obj2.writeId = obj1.writeId;

console.assert(obj2.readId() === 'b', 'Test 3');
obj2.writeId('y');
console.assert(obj2.readId() === 'y', 'Test 4');


const readBoundTo1 = obj2.readId.bind(obj1);
const writeBoundTo1 = obj2.writeId.bind(obj1);

console.assert(obj1.readId() === 'x', 'Test 5');
console.assert(readBoundTo1() === 'x', 'Test 6');
writeBoundTo1('hi!');
console.assert(obj1.readId() === 'hi!', 'Test 7');
console.assert(readBoundTo1() === 'hi!', 'Test 8');

```

[TOP](#encapsulation/javascripting)

---

## 6-counter-object.js - fail

* [review source](6-counter-object.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
- FAIL: TypeError: Cannot read property 'count' of undefined
+ PASS: Test 5
+ PASS: Test 6
```

```js
const counter = {
  state: {
    count: 0
  },
  get count() {
    return this.state.count;
  },
  up: function () {
    this.state.count += 1;
  },
  down: function () {
    this.state.count -= 1;
  }
};

counter.up();
const test1 = counter.count === 1;
console.assert(test1, 'Test 1');

counter.down();
const test2 = counter.count === 0;
console.assert(test2, 'Test 2');


const unBoundUp = counter.up;
const unBoundDown = counter.down;
try {
  unBoundUp();
  console.assert(counter.count === 1, 'Test 3');
  unBoundDown();
  console.assert(counter.count === 0, 'Test 4');
} catch (err) {
  console.assert(false, err.name + ': ' + err.message);
}


const boundUp = counter.up.bind(counter);
const boundDown = counter.down.bind(counter);

boundUp();
const test5 = counter.count === 1;
console.assert(test5, 'Test 5');

boundDown();
const test6 = counter.count === 0;
console.assert(test6, 'Test 6');

```

[TOP](#encapsulation/javascripting)

