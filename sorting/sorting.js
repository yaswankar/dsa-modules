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
    console.log('Bubble Sort =====> Sorted list ----> O(n2)', list)
}

function selectionSort(list) {
    const size = list.length;
    let temp;
    for(let i=0; i<size; i++) {
        const minIdx = i;
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
    console.log('Selection Sort ====> Sorted list ----> O(n2)', list)
}
 
module.exports = {
    bubbleSort,
    selectionSort,
}