// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109


// Time complexity: O(n), where n is the length of nums.
var majorityElement = function(nums) {
    const counterMap = new Map();
    for(let i=0; i<nums.length; i+=1) {
        if(!counterMap.has(nums[i])) {
            counterMap.set(nums[i], 1);
        } else {
            counterMap.set(nums[i], counterMap.get(nums[i])+1);
        }
    }
    let maxVal = 0;
    let maxKey = -1;
    for (let [key, value] of counterMap) {
        if(value > maxVal) {
            maxVal = value;
            maxKey = key;
        }
    }
    return maxKey;
};

// Optimized Approach - O(n) time complexity and O(1) space complexity
// Boyer-Moore Voting Algorithm

var majorityElement = function(nums) {
    let candidate = nums[0];
    let count = 1;
    
    for(let i = 1; i < nums.length; i++) {
        if(count === 0) {
            candidate = nums[i];
            count = 1;
        } else if(nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    // Verify action
    /*
    count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === candidate) {
            count++;
        }
    }
    return count > nums.length / 2 ? candidate : -1;
    */
    
    return candidate;
};
