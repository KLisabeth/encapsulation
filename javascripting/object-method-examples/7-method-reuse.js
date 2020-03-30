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