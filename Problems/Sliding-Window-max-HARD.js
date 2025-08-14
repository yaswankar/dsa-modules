// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length


// * Optimized Sliding Window Maximum using Monotonic Deque
//* Time complextity: O(n) Space complexity: O(k)
var maxSlidingWindow = function(nums, k) {
    const res = [];
    const ordIdxs = []
    const n = nums.length;
    for (let i=0; i<n; i++) {
        while(ordIdxs.length > 0 && (ordIdxs[0] <= i-k)) {
            ordIdxs.shift();
        }
        while(ordIdxs.length > 0 && (nums[ordIdxs[ordIdxs.length - 1]] < nums[i])) {
            ordIdxs.pop();
        }
        ordIdxs.push(i);
        if(i >= k-1) res.push(nums[ordIdxs[0]]);
    }
    return res;
};