// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow up: Could you solve the problem in linear time and in O(1) space?


// Time complexity: O(n) and Space complexity: O(1), where n is the length of nums.
var majorityElement = function(nums) {
    let c1 = null;
    let ct1 = 0;
    let c2 = null;
    let ct2 = 0;
    const n = nums.length;
    for(let i=0; i<n; i+=1) {
        if (c1 && c1 === nums[i]) {
            ct1 += 1;
        } else if(c2 && c2 === nums[i]) {
            ct2 += 1;
        } else if (!ct1) {
            c1 = nums[i];
            ct1 = 1;
        } else if (!ct2) {
            c2 = nums[i];
            ct2 = 1;
        } else {
            ct1 -= 1;
            ct2 -= 1;
        }
    }

    ct1 = 0;
    ct2 = 0;
    
    for (let num of nums) {
        if (c1 !== null && num === c1) ct1++;
        else if (c2 !== null && num === c2) ct2++;
    }
    const result = [];
    const threshold = Math.floor(n/3);
    
    if (ct1 > threshold) result.push(c1);
    if (ct2 > threshold) result.push(c2);
    
    return result;
};