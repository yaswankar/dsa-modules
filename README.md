# Data Structures and Algorithms

## Time complexity analysis chart

### **Searching**

| Algorithm  | Best | Average | Worst |
| ---------- | ---- | ------- | ----- |
| Linear Search  | `O(1)` | `O(n)` | `O(n)` |
| Binary Search  | `O(nlogn)` | `O(nlogn)` | `O(n)` |


### **Sorting**

| Algorithm  | Best | Average | Worst |
| ---------- | ---- | ------- | ----- |
| Bubble Sort  | `O(n)` | `O(n2)` | `O(n2)` |
| Selection Sort  | `O(n2)` | `O(n2)` | `O(n2)` |
| Insertion Sort  | `O(n)` | `O(n2)` | `O(n2)` |
| Quick Sort  | `O(nlogn)` | `O(nlogn)` | `O(n2)` |
| Merge Sort  | `O(nlogn)` | `O(nlogn)` | `O(nlogn)` |


### BST traversing

| Algorithm  | time complex | space complex |
| ---------- | ---- | ------- |
| Pre-order  | `O(n)` | `O(1)` for recursive stack and `O(h)` for non-recursive where h=N for skewed tree and h=logN for complete tree |
| Post-order  | `O(n)` | `O(1)` for recursive stack and `O(h)` for non-recursive where h=N for skewed tree and h=logN for complete tree |
| Level-order  | `O(n)` | `O(n)` |
