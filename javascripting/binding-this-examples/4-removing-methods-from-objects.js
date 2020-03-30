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

