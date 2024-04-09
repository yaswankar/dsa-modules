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
 
module.exports = {
    bubbleSort,
    selectionSort,
    insertionSort,
}