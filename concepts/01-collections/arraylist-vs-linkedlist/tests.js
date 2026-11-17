// Concept exercises: each case names the method it calls.
const MIN = -(2 ** 31);
const MAX = 2 ** 31 - 1;

// ArrayList.add(0, x) shifts the tail. This length makes that quadratic loop time out.
const PREPEND_N = 350000;
const prependSrc = Array.from({ length: PREPEND_N }, (_, i) => i);
const prependExpected = prependSrc.slice().reverse();

// LinkedList.get(i) on every index restarts a walk. This length makes that time out.
const SUM_N = 120000;
const sumSrc = Array.from({ length: SUM_N }, (_, i) => (i % 5) - 2);
const sumExpected = sumSrc.reduce((a, b) => a + b, 0);

module.exports = {
  cases: [
    { method: 'appendAll', name: 'appendAll: basic', input: [[1, 2, 3]], expected: [1, 2, 3] },
    { method: 'appendAll', name: 'appendAll: empty', input: [[]], expected: [] },
    { method: 'appendAll', name: 'appendAll: single', input: [[7]], expected: [7] },
    { method: 'appendAll', name: 'appendAll: duplicates', input: [[2, 2, 1]], expected: [2, 2, 1] },
    { method: 'appendAll', name: 'appendAll: negatives', input: [[-5, -1, -5]], expected: [-5, -1, -5] },
    { method: 'appendAll', name: 'appendAll: min and max', input: [[MIN, MAX, MIN]], expected: [MIN, MAX, MIN] },

    { method: 'prependAll', name: 'prependAll: basic', input: [[1, 2, 3]], expected: [3, 2, 1] },
    { method: 'prependAll', name: 'prependAll: empty', input: [[]], expected: [] },
    { method: 'prependAll', name: 'prependAll: single', input: [[4]], expected: [4] },
    { method: 'prependAll', name: 'prependAll: duplicates', input: [[1, 1, 2]], expected: [2, 1, 1] },
    { method: 'prependAll', name: 'prependAll: negatives', input: [[-1, -2, -3]], expected: [-3, -2, -1] },
    { method: 'prependAll', name: 'prependAll: min and max', input: [[MIN, 0, MAX]], expected: [MAX, 0, MIN] },

    { method: 'sumAll', name: 'sumAll: empty', input: [[]], expected: 0 },
    { method: 'sumAll', name: 'sumAll: single', input: [[6]], expected: 6 },
    { method: 'sumAll', name: 'sumAll: duplicates', input: [[2, 2, 2]], expected: 6 },
    { method: 'sumAll', name: 'sumAll: negatives', input: [[-4, -1, 5]], expected: 0 },
    { method: 'sumAll', name: 'sumAll: min and max', input: [[MIN, MAX]], expected: -1 },
    { method: 'sumAll', name: 'sumAll: two max (does not fit in int)', input: [[MAX, MAX]], expected: MAX * 2 },
    { method: 'sumAll', name: 'sumAll: two min (does not fit in int)', input: [[MIN, MIN]], expected: MIN * 2 },

    // remove(int) deletes an index. These inputs disagree with that overload,
    // except "value sits at that index", which happens to match.
    { method: 'removeFirstMatch', name: 'removeFirstMatch: value 0 is not index 0', input: [[5, 1, 0], 0], expected: [5, 1] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: value equals a different index', input: [[1, 8, 9], 1], expected: [8, 9] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: value sits at that index', input: [[0, 8, 9], 0], expected: [8, 9] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: absent, but a valid index', input: [[10, 20, 30], 1], expected: [10, 20, 30] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: absent, out of range', input: [[1, 2, 3], 5], expected: [1, 2, 3] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: empty', input: [[], 0], expected: [] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: duplicates, first only', input: [[4, 7, 4], 4], expected: [7, 4] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: negatives', input: [[-2, -5, -2], -5], expected: [-2, -2] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: min value', input: [[MIN, MAX, MIN], MIN], expected: [MAX, MIN] },
    { method: 'removeFirstMatch', name: 'removeFirstMatch: max value', input: [[1, MAX, 2], MAX], expected: [1, 2] },

    { method: 'prependAll', name: 'prependAll: large (needs O(n) front inserts)', input: [prependSrc], expected: prependExpected },
    { method: 'sumAll', name: 'sumAll: large (needs a linear walk)', input: [sumSrc], expected: sumExpected },
  ],
};
