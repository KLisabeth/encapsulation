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

