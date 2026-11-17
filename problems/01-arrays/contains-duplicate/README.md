# Contains Duplicate

**Topic:** Arrays & Hashing  **Difficulty:** Easy  **Added:** 2026-11-17

Given an array of integers `nums`, return `true` if any value appears at least twice. Return `false` when every element is distinct.

## Examples

```
Input:  nums = [1, 2, 3, 1]
Output: true

Input:  nums = [1, 2, 3, 4]
Output: false

Input:  nums = [3, 1, 4, 1, 5]
Output: true
```

## Constraints

- `0 <= nums.length <= 2 * 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

## Goal

Checking every pair is O(n²). Aim for **O(n) time**. One case is large enough that the quadratic scan will time out.

<details>
<summary>Hint 1</summary>

As you walk the array, the only question for each value is whether you have already seen it.
</details>

<details>
<summary>Hint 2</summary>

A `HashSet<Integer>` answers that in expected O(1). `add` returns `false` when the value was already in the set.
</details>

<details>
<summary>Hint 3</summary>

Sorting, then comparing neighbors, is O(n log n). Better than every pair, and short of the linear goal.
</details>
