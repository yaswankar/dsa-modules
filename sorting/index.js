const { bubbleSort, selectionSort, insertionSort, quickSort } = require('./sorting');
const list = [1,3,2,5,4,7,6,9,8];

bubbleSort(JSON.parse(JSON.stringify(list)));
selectionSort(JSON.parse(JSON.stringify(list)));
insertionSort(JSON.parse(JSON.stringify(list)));
quickSort(JSON.parse(JSON.stringify(list)), 0, 8);
