function lsearch(list, pos, item, size) {
    if(pos<size) {
        if(list[pos] === item) {
            console.log('Data found at position:', pos);
            return;
        } else {
            lsearch(list, pos+1, item, size)
        }
    } else {
        console.log('Element not found');
    }
}

function bsearch(list, item, first, last) {
    const mid = parseInt(((first+last)/2), 10);
    if(first <= last) {
        if(item < list[mid]) {
            last = mid - 1;
            bsearch(list, item, first, last);
        } else if(item > list[mid]) {
            first = mid + 1;
            bsearch(list, item, first, last);
        } else {
            console.log('Data found at position:', mid);
            return;
        }
    } else {
        console.log('Element not found');
    }
}

module.exports = {
    lsearch,
    bsearch
}