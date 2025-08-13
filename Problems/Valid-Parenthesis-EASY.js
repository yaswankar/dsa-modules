// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


// Time complexity - O(1) and Space complexity - O(n), where n is the length of s.
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const openers = {
        '(':')',
        '{':'}',
        '[':']'
    };
    const closures = {')': '(', '}': '{', ']': '['};
    for(let i=0; i<s.length; i++) {
        if(openers[s[i]]) {
            stack.push(s[i]);
            continue;
        }
        const popped = stack.pop();
        if(popped !== closures[s[i]]) return false;
    }
    return stack.length ? false : true;
};