class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(parent, node) {
        if(node.value < parent.value) {
            if(!parent.left) {
                parent.left = node;
            } else {
                this.insertNode(parent.left, node);
            }
        } else {
            if(!parent.right) {
                parent.right = node;
            } else {
                this.insertNode(parent.right, node);
            }
        }
    }

    remove(value) {
        this.root = this.removeNode(this.root, value)
    }

    removeNode(node, target) {
        if(!node) {
            return node;
        } else {
            if(target < node.value) {
                node.left = this.removeNode(node.left, target);
                return node;
            } else if(target > node.value) {
                node.right = this.removeNode(node.right, target);
                return node;
            } else {
               if(!node.left && !node.right) {
                    node = null;
                    return node;
               } 
               if(!node.left) {
                    node = node.right;
                    return node;
               } else if(!node.right) {
                    node = node.left;
                    return node;
               }
               // TODO - to handle node with two childs
            }
        }
    }

    searchNode(node, target) {
        if(!node) {
            console.log('target not found..')
        } else {
            if(target < node.value) {
                return this.searchNode(node.left, target)
            } else if (target > node.value) {
                return this.searchNode(node.right, target);
            } else {
                return node;
            }
        }
    }

    printBst() {
        this.printNode(this.root);
    }

    printNode(node) {
        console.log(node.left?.value || '|', '--', node.value, '--', node.right?.value || '|');
        if(!node.left) {
            return;
        } else {
            this.printNode(node.left)
        }
        if(!node.right) {
            return
        } else {
            this.printNode(node.right)
        }
    }
}


(function perform() {
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(3);
    bst.insert(12);
    bst.insert(15);
    bst.insert(6);
    bst.insert(11)
    bst.printBst();
    console.log('-----------------------------');
    // bst.remove(3);
    // bst.remove(12);
    // bst.printBst();
    const searchNode = bst.searchNode(bst.root, 12);
    console.log('searchedNode >>>>', searchNode);
})();