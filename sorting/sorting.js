function bubbleSort(list) {
    const size = list.length;
    let temp;
    for(let i=0; i<size; i++) {
        for(let j=0; j<size-i; j++) {
            if(list[j]>list[j+1]) {
                temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
    console.log('Bubble Sort =====> Sorted list ----> O(n2)', list);
}

function selectionSort(list) {
    const size = list.length;
    let temp;
    for(let i=0; i<size; i++) {
        let minIdx = i;
        // Below part can be recursed
        for(let j=i+1; j<size; j++) {
            if(list[j]<list[minIdx]) {
                minIdx = j;
            }
        }
        temp = list[i];
        list[i] = list[minIdx];
        list[minIdx] = temp;
    }
    console.log('Selection Sort ====> Sorted list ----> O(n2)', list);
}

/* Adv: Suitable for a senario wherein a new element is added in an already sorted list
        Works faster for less no of elements

   Disadv: Slow for a large sized list
           Worst performance when the input list is in whole reverse order
*/
function insertionSort(list) {
    const size = list.length;
    let temp;
    for(let pass=1; pass<=size; pass++) {
        for(let i=0; i<pass; i++) {
            if(list[pass]<list[i]) {
                temp = list[pass];
                for(let j=pass-1; j>=i; j--) {
                    list[j+1]=list[j];
                }
                list[i] = temp;
            }
        }
    }
    console.log('Insertion Sort ====> Sorted list ----> O(n2)', list)
}

function quickSort(list, start, end) {
    if(start < end) {
        const pIndex = partition(list, start, end+1);
        quickSort(list, start, pIndex-1);
        quickSort(list, pIndex+1, end);
    }
    console.log('Quick Sort ====> Sorted list ----> O(n2)', list);
}

// helper methods
function partition(list, low, high) {
    let up = low, down = high;
    let pivotEle = list[low];
    do {
        do{
            up+=1;
        } while(list[up] < pivotEle);
        do {
            down -= 1;
        }  while(list[down] > pivotEle)
        if(up < down) {
            interchange(list, up, down);
        }
    } while (up < down);
    list[low] = list[down];
    list[down] = pivotEle;
    return down;
}

function interchange(list, up, down) {
    const temp = list[up];
    list[up] = list[down];
    list[down] = temp;
}
 
module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort
}