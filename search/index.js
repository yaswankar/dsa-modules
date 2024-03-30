const { lsearch, bsearch } = require('./search')

const list = [1,2,3,4,5,6,7,8,9];
const item = 5;

lsearch(list, 0, item, list.length);
bsearch(list, item, 0, 9);

