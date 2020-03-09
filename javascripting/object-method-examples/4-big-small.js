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
