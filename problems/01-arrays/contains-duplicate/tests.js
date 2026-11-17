// Strictly increasing, so every value is unique. A pair scan is worst-case O(n^2).
const N = 200000;
const big = Array.from({ length: N }, (_, i) => i - 100000);
const MIN = -(2 ** 31);
const MAX = 2 ** 31 - 1;

module.exports = {
  method: 'containsDuplicate',
  timeoutMs: 2000,
  cases: [
    { name: 'example 1', input: [[1, 2, 3, 1]], expected: true },
    { name: 'example 2', input: [[1, 2, 3, 4]], expected: false },
    { name: 'example 3', input: [[3, 1, 4, 1, 5]], expected: true },
    { name: 'empty', input: [[]], expected: false },
    { name: 'single element', input: [[42]], expected: false },
    { name: 'duplicates', input: [[8, 8]], expected: true },
    { name: 'negatives, distinct', input: [[-1, -2, -3]], expected: false },
    { name: 'negatives, duplicate', input: [[-2, 0, -2]], expected: true },
    { name: 'min and max, distinct', input: [[MIN, MAX]], expected: false },
    { name: 'min duplicated', input: [[MIN, 0, MIN]], expected: true },
    { name: 'max duplicated', input: [[MAX, MAX]], expected: true },
    { name: 'single min value', input: [[MIN]], expected: false },
    { name: 'large input (needs O(n))', input: [big], expected: false },
  ],
};
