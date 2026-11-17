# ArrayList vs LinkedList

**Topic:** Collections  **Added:** 2026-11-17

## The idea

`ArrayList` and `LinkedList` both implement `List`, so the calls look the same. The costs do not. The wrong list, or an index loop on the right one, turns a linear pass into a quadratic one. That is a common reason an interview solution times out.

`ArrayList` is a growable array. `get` and `set` by index are O(1). Adding at the **end** is O(1) amortized, because the backing array only occasionally grows. Inserting or deleting anywhere else shifts every later element, so it is O(n).

`LinkedList` is a doubly linked chain of nodes. Adding or removing at either **end** (`addFirst`, `addLast`, `removeFirst`, `removeLast`) is O(1). There is no random access: `get(i)` walks from the nearer end, which is O(n).

Reach for `ArrayList` unless you are repeatedly editing the ends. A stack or queue only needs the ends; `ArrayDeque` is the usual tool for that, and it is a later lesson.

## In code

```java
List<Integer> a = new ArrayList<>();
a.add(1);            // end, O(1) amortized
a.add(0, 9);         // front, shifts the tail, O(n)
int x = a.get(0);    // O(1)

LinkedList<Integer> b = new LinkedList<>();
b.addFirst(1);       // O(1)
b.addLast(2);        // O(1)
b.removeFirst();     // O(1)

// The for-each loop uses the iterator: O(n) on either list.
long sum = 0;
for (int v : b) sum += v;

// Remove a value. An int argument selects the index overload.
list.remove(Integer.valueOf(target));
```

| Operation | ArrayList | LinkedList |
|-----------|-----------|------------|
| `get` / `set` by index | O(1) | O(n) |
| add / remove at the end | O(1) amortized | O(1) |
| add / remove at the front | O(n) | O(1) |
| insert / delete in the middle, once positioned | O(n) to shift | O(1) |
| extra memory | one packed array | a node and two pointers per element |

## Gotchas

- **`list.get(i)` in a counted loop is O(n²) on a `LinkedList`.** Each `get` starts a new walk. `for (int v : list)` visits each node once. `sumAll` includes a long list that times out the indexed loop.
- **`ArrayList.add(0, x)` or `remove(0)` in a loop is O(n²).** Every call shifts the whole array. Front inserts belong on a `LinkedList` (`addFirst`), or add at the end and reverse once. `prependAll` includes a long input that times out the `ArrayList` version.
- **`remove` is overloaded.** `remove(1)` deletes **index** 1. `remove(Integer.valueOf(1))` deletes the **value** 1. An `int` argument always picks the index overload. A missing index throws `IndexOutOfBoundsException` instead of leaving the list alone.
- Accumulate a sum in a `long`. `Integer.MAX_VALUE + Integer.MAX_VALUE` does not fit in an `int`. A boxed `Integer` unboxes into whatever type you add it to, so `int s = 0; s += boxed` overflows silently.

## Exercises (Solution.java)

1. `appendAll(int[] nums)`: copy the values into an `ArrayList`, adding at the end, and return it.
2. `prependAll(int[] nums)`: build a list by inserting each value at the front (the result is reversed). Do it in O(n).
3. `sumAll(int[] nums)`: put the values in a `LinkedList` and return their sum as a `long`, in O(n).
4. `removeFirstMatch(int[] nums, int value)`: copy into a list and remove the first element **equal to** `value`. If it never appears, return every element in order.
