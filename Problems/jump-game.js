// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


// Brute Force - O(n^2) time complexity
function canJump(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(false);
    dp[0] = true; // Starting point
    for(let i=0; i<n; i+=1) {
        if(!dp[i]) continue;
        const maxReach = Math.min(i+nums[i], n-1);
        for(let j=i+1; j<=maxReach; j+=1) {
            dp[j] = true;
        }
        if(dp[n-1]) return true;
    }
    return dp[n-1];
}


// Optimized Approach - O(n) time complexity
function canJump1(nums) {
    const n = nums.length;
    let maxReach = 0;
    for(let i=0; i< n; i+=1) {
        if(i> maxReach) {
            return false; // If current index is beyond max reachable index
        }
        maxREach = Math.max(maxReach, i+nums[i]);
        if(maxReach >= n-1) return true;
    }
    return maxReach >= n-1;
}