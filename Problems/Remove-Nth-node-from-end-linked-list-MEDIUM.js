// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz


// My solution - Time complexity: O(n) Space complexity: O(1) - Requires 2 passes

var removeNthFromEnd = function(head, n) {
    let temp = head;
    let nodeCount = 1;
    let targetIdx = -1;
    while(temp.next) {
        nodeCount += 1;
        temp = temp.next;
    }
    targetIdx = nodeCount - n;
    if(!targetIdx) {
        head = nodeCount < 1 ? null : head.next;
    } else {
        let prev = null;
        let counter = 0;
        temp = head;
        while(temp && counter <= targetIdx) {
            if(counter === targetIdx) {
                prev.next = temp.next;
                break;
            }
            if(!counter) prev = head;
            else prev = prev.next;
            temp = temp.next;
            counter += 1;
        }
    }
    return head;
};

// Solution 2: Time complexity: O(n) Space complexity: O(n) - Requires 1 pass

var removeNthFromEndStack = function(head, n) {
    const stack = [];
    let current = head;
    
    // Push all nodes to stack
    while (current) {
        stack.push(current);
        current = current.next;
    }
    
    // Handle edge case: removing head
    if (n === stack.length) {
        return head.next;
    }
    
    // Get the node before target and remove target
    const beforeTarget = stack[stack.length - n - 1];
    beforeTarget.next = beforeTarget.next.next;
    
    return head;
};

// Solution 3: Time complexity: O(n) Space complexity: O(1) - Requires 1 pass with two pointers
var removeNthFromEnd = function(head, n) {
    // Create dummy node to handle edge case of removing head
    const dummy = { next: head };
    
    let fast = dummy;
    let slow = dummy;
    
    // Move fast pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    
    // Move both pointers until fast reaches end
    // slow will be at the node before the target node
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the nth node from end
    slow.next = slow.next.next;
    
    return dummy.next;
};

// Solution-4 : modified 2 pointer approach
var removeNthFromEndNoDummy = function(head, n) {
    let fast = head;
    let slow = head;
    
    // Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // If fast is null, we need to remove the head
    if (fast === null) {
        return head.next;
    }
    
    // Move both pointers until fast.next is null
    // This positions slow at the node before target
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the target node
    slow.next = slow.next.next;
    
    return head;
};
