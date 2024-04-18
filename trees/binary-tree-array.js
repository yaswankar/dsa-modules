const tree = Array(7).fill(null);

function setRoot(val) {
    if(tree[0]) {
        console.log('Root already exists!!')
        return;
    }
    tree[0] = val;
}

function setLeftNode(val, parentIdx) {
    if(!tree[parentIdx]) {
        console.log('Parent node doesnt exists!!');
        return;
    }
    tree[(parentIdx*2)+1] = val;
}

function setRightNode(val, parentIdx) {
    if(!tree[parentIdx]) {
        console.log('Parent node doesnt exists!!');
        return;
    }
    tree[(parentIdx*2)+2] = val;
}

function binaryTree() {
    setRoot(1);
    setLeftNode(2, 0);
    setRightNode(3, 0);
    setLeftNode(4, 1);
    setRightNode(5, 1);
    setLeftNode(6, 2);
    setRightNode(7, 2);
    console.log(tree);
}

// Time complexity - O(logn)
// Space complexity - O(1)
binaryTree();