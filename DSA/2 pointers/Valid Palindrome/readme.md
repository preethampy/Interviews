# Valid Palindrome

## Description
A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

## My Solution
```
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sWithoutSpecialChars = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        console.log(sWithoutSpecialChars);
        var start = 0;
        var end = sWithoutSpecialChars.length - 1;
        while(start < end){
            if(sWithoutSpecialChars[start] !== sWithoutSpecialChars[end]) return false;
            start++;
            end--;
        }
        return true;

        <!-- Another solution which is not prefered in interviews -->
        // return sWithoutSpecialChars === sWithoutSpecialChars.split("").reverse().join("");
    }
}

```

## Why the .split() .reverse() .join() is not recommended ?
1. **split("")** makes an array of all characters → size = n.
2. **reverse()** rearranges → still size = n.
3. **join("")** makes a new string → again size = n.

So here, you create extra copies of the string, using O(n) extra space.
The more the characters more size of array

## Why 2 pointer approach works ?
1. You only keep a few variables (left, right, maybe char).
2. No extra array or string copies.
3. So the extra space is constant → O(1) space.

## Both are O(n) in time ⏱️

Because you still need to look at each character at least once to check for palindrome.

The difference is in space:

- First approach → O(n) space
- Two-pointer approach → O(1) space