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
