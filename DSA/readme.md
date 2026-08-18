## Algorithm

It is a set of well-defined instructions to solve a particular problem.

## Characteristics of Algorithm

1. Well defined inputs and outputs
2. Each step should be clear and unambiguous
3. Language independent

## Why Algorithms ?

As a developer we are going to come accross problems that we need to solve. Learning algo's means learning different techniques to efficiently solve those problems. One problem could be solved in many ways using different algo's. Every algo comes with its own tradeoffs when it comes to performance.

## Algorithm analysis

There are multiple ways to solve a problem.
Ex: There are multiple ways/algo's to sort a list of numbers.

### How do we analyse which one of them is the most efficient algorithm ?

The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors like below:

1. Programming language used to implement the algorithm
2. The computer the program runs on
3. Other programs running at the same time
4. Quality of the operating system

Keeping these points in mind, we evaluate the performance of an algorithm in terms of its **input size**. The evaluation is of two types:

1. **Time complexity** - Amount of time taken by an algorithm to run, as a function of input size
2. **Space complexity** - Amount of space taken by an algorithm to run, as a function of input size

> Note: We do not consider the time taken by an algo/code to run as it is dependent on the machine, programming language etc, but the time taken when the input size changes of an algo/code.

> Ref: The Time Complexity of an algorithm/code is not equal to the actual time required to execute a particular code, but the number of times a statement executes.

> Ref-2: Instead of measuring actual time required in executing each statement in the code, Time Complexity considers how many times each statement executes.

### How to represent complexity ?

We use **Asymptotic notations**, which are mathematical tools to represent time and space complexities.

1. Big-O notation (O-notation) - Worst case complexity
2. Omega notation (Ω-notation) - Best case complexity
3. Theta notation (θ-notation) - Average case complexity

### Big-O notation

It describes the complexiy of an algorithm using algebraic terms.
It has two characteristics:

1. It is expressed in terms of the input
2. It focuses on the bigger picture without getting caught up in the minute details

#### O(n)

Let's take below example of code:

```
function summation(n){ --------> n=4
    let sum = 0; ----------> this statement executes 1 time
    for(let i=1; i<=n; i++){
        sum = sum+i; ----------> this statement executes 4 times
    }
    return sum; ----------> this statement executes 1 time
}

summation(4);
// Outputs: 10
```

- The total count of how many times all the statements get executed is 4(from for loop, which is the input "n" given to that function), plus 2 other statements
- So, we can write it as n+2, as n is the given input and other 2 are from function itself.
- For now, we have n=4, it can also be n=1000000000000000. So it doesnt make sense to add 2 to it, instead we can just say it as "n" as the value of 2 in 1000000000000002 is insignificant and we can drop it.
- Our time complexity is dependent on the input size (hence point 1)
- Hence, The time complexity of our summation algorithm above is **_O(n) - Linear (As the input size increases, time-complexity increases)_**
- Anytime we see a loop in an algorith, most of the times, the time complexity is atleast O(n) Linear.

#### O(1)

Let's consider another example:

```
function summation(n){
    return (n * (n+1)) / 2;
}
```

- Time complexity of above function is O(1) - Constant, because it always has only one statement to execute irrespective of input size.

#### O(n^2)

```
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
      // Time complexity = O(n^2) - Quadratic
    }
}
```

The more the loops, the more the O(n ^ "number of loops")

#### O(log n)

If input size reduces by half every iteration then time complexity is O(logn) - Logarithmic.
Consider a binary search example stated below:

```
function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);

    if (arr[middleIndex] === target) {
      // Means we found the target
      return middleIndex;
    } else if (arr[middleIndex] < target) {
      // Means the target is on the right side
      // So we ignore the left side (including the middle one) and search on the right side
      left = middleIndex + 1;
    } else {
      // Means the target is on the left side
      // So we ignore the right side (including the middle one) and search on the left side
      right = middleIndex - 1;
    }
  }
  return -1;
}

const arr = [-9, -2, 0, 3, 6, 9, 11, 16, 19];
const target = 1; OUTPUT: -1
const target = 6; OUTPUT: 4

console.log(binarySearch(arr, target));
OUTPUT: -1 for 1, 4 for 6
```

[add image here]

### Objects - Big-O

Consider an object as an example:

```
const person = {
    firstName: "Preetham",
    lastName: "Enjamuri"
}
```

Below are the time complexities for above example:

1. Insert - O(1)
2. Remove - O(1)
3. Get - O(1)
4. Search - O(n) (Because the key:value we are searching for might be at last in a very big object)
5. Object.keys(), Object.values(), Object.entries() - O(n)

### Arrays - Big-O

Consider an array as an example:

```
const odd = [1,3,5,7,9]
```

Below are the time complexities for above example:

1. Insert / Remove at end - O(1)
2. Insert / Remove at beginning - O(n) (because when we remove of insert an item at beggining, rest of the array will be assigned a new index)
3. Access - O(1)
4. Search - O(n) (Because the item we are searching for might be at last in a very big array)
5. push/pop - O(1)
6. shift / unshift / concat / slice / splice / forEach / map / filter / reduce - O(n)

# Algorithms

## Recursion

Recursion is a problem solving technique where a function will be called by itself.

### Points to remember

1. Every recursive function need to have a **_base case_**, means a condition which can terminate the recursion(loop).
2. Without a base case, recursive function will end up with infinity loop.
3. A recursive solution may be far worse compared to iterative solution.

### Examples

#### Count

```
function count(n){
  console.log(n);
  if(n < 1){
    return;
  }
  else{
    n = n - 1;
    count(n);
  }
}
count(5);
Output: 5,4,3,2,1
Base case: n < 1
Time complexity: O(n) because this function will keep calling itself n times (n is the number we pass to this function)
```

#### Factorial

```
function factorial(n){
    if(n < 1){
        return 1;
    }
    else{
        n = n * factorial(n - 1);
        return n;
    }
}

factorial(5);
Output: 120What
Base case: n < 1
Time complexity: O(n) because this function will keep calling itself n times (n is the number we pass to this function)
```

#### Fibonacci

## Search Algorithms

### Linear search

In Linear search or sequential search algorithm we go through each and every item from one end to other end of an array and check if we find the match, else we return -1 or any string or anything.

```
function getIndex(arr,t){
  for(let i=0; i<arr.length; i++){
    if(arr[i] == t){
      return i;
    }
  }
  return -1
}
getIndex([1,2,3,4],4);
Output: 3
Time complexity: O(n) because we have a for loop in function, and the loop will keep looping based on input array length.
```

### Binary search

Binary search is a search algorithm used to find the position of a target value within a **_sorted array_**. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty.

#### Steps

1. Divide the search space (array) into two halves by finding the middle index.
   ```
   const leftIndex = 0;
   const rightIndex = array.length - 1;
   const middleIndex = Math.floor((leftIndex + rightIndex)/2);
   ```
2. Compare the middle element of the search space with the key(target).
3. If the key is found at middle element, the process is terminated(means we found the target).
4. If the key is not found at middle element, choose which half will be used as the next search space.
5. If the key is smaller than the middle element, then the left side is used for next search.
   ```
   rightIndex = middleIndex - 1;
   ```
6. If the key is larger than the middle element, then the right side is used for next search.
   ```
   leftIndex = middleIndex + 1;
   ```
7. This process is continued until the key is found or the total search space is exhausted.
   ```
   while(leftIndex <= rightIndex)
   ```
8. TIP: We cannot use while loop with while(true), because, if the target doesnt exist in the array given, it will be an infinite loop.

#### Example

```
function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);

    if (arr[middleIndex] === target) {
      // Means we found the target
      return middleIndex;
    } else if (arr[middleIndex] < target) {
      // Means the target is on the right side
      // So we ignore the left side (including the middle one) and search on the right side
      left = middleIndex + 1;
    } else {
      // Means the target is on the left side
      // So we ignore the right side (including the middle one) and search on the left side
      right = middleIndex - 1;
    }
  }
  return -1;
}

const arr = [-9, -2, 0, 3, 6, 9, 11, 16, 19];
const target = 1; OUTPUT: -1
const target = 6; OUTPUT: 4

console.log(binarySearch(arr, target));
OUTPUT: -1 for 1, 4 for 6
Time complexity: O(log n) Please refer O(log n) for explanation
```

### Sorting algorithms

1. Bubble sort
2. Insertion sort
3. Quick sort
4. Merge sort

#### Bubble sort (O(n^2))

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

- It starts at the beginning of the list and compares the first two elements.
- If the first element is greater than the second, they are swapped.
- It then moves to the next pair of elements, compares them, and swaps if necessary.
- This process continues until the end of the list is reached. After the first pass, the largest element will be in its correct position.

**Example**:

```
function bubbleSort(arr) {
  var swap = false;
  do {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
}
var myarr = [8, 20, -2, 4, -6]

console.log(myarr); OUTPUT: [8, 20, -2, 4, -6]
bubbleSort(myarr)
console.log(myarr); OUTPUT: [-6, -2, 4, 8, 20]

NOTICE how the array got changed in-place

Time-complexity - O(n^2) as two loops exists
```

#### Insertion sort ()

## Two pointer

### When to use

### Most asked interview questions

1. **Two Sum II (sorted)** – opposite ends.
2. **3Sum** – sort + outer i loop + two pointers (skip duplicates).
3. **Container With Most Water** – opposite ends, move the shorter line.
4. **Trapping Rain Water** – two pointers with leftMax/rightMax.
5. **Remove Duplicates from Sorted Array** – read/write.
6. **Move Zeroes** – read/write stable compaction.
7. **Valid Palindrome / Palindrome with at most one deletion** – ends inward.
8. **Longest Substring Without Repeating Characters** – sliding window with map.
9. **Minimum Window Substring** – sliding window, counts, shrink until invalid.
10. **Linked List Cycle / Middle of Linked List / Remove Nth from End** – fast–slow.
11. **Merge Intervals / Interval List Intersections** – two arrays advancing.
12. **Squares of a Sorted Array** – fill from end with larger square.
13. **Pair with Target Sum / Target Difference** – sorted + ends.
14. **Subarray with Sum at Most / Exactly K** – sliding window (non-negative) or map (for exact with negatives).
