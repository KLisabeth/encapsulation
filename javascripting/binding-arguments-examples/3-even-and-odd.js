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
