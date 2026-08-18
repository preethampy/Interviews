# Two Integer Sum II

## Description
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use O(1) additional space.

## My solution
```
class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var start = 0;
        var end = numbers.length - 1;
        while (start < end) {
            const sum = numbers[start] + numbers[end];
            if (sum == target) {
                return [start+1, end+1];
            }
            if (sum < target) {
                start++;
            }
            else if (sum > target) {
                end--;
            }
        }
    }
}
```