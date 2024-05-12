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
        this.dia = 0;
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
        console.log(node?.left?.value || '|', '--', node.value, '--', node?.right?.value || '|');
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
    
    // Count no of nodes in tree
    countNodes(root) {
        if(!root) return 0;
        return 1+this.countNodes(root.left)+this.countNodes(root.right);
    }

    //diameter of tree
    diameter(root) {
        if(!root) return 0;
        const lh = this.diameter(root.left);
        const rh = this.diameter(root.right);
        this.dia = Math.max(this.dia, 1 + lh + rh);
        return (1 + Math.max(lh, rh));
    }

    //pust elements of bst into an arrahy
    serialize(node, arr) {
        if(!node) {
            arr.push(null);
            return;
        }
        arr.push(node.value);
        this.serialize(node.left, arr);
        this.serialize(node.right, arr);
    }

    //form bst from an array
    deserialize(arr, index) {
        if(index >= arr.length) {
            return null;
        }
        const root = new Node(arr[index]);
        root.left = this.deserialize(arr, index+1);
        root.right = this.deserialize(arr, index+2);
        return root;
    }

    // pre-order traversal
    preOrderTraversal(node) {
        if(!node) return;
        console.log(node.value, ', ');
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    // post-order traversal
    postOrderTraversal(node) {
        if(!node) return;
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value, ', ');
    }

    height(root) {
        if(!root) return 0;
        const lh = this.height(root.left);
        const rh = this.height(root.right);
        if(lh > rh) return lh+1;
        return rh+1;
    }

    // level-order traversal
    levelOrderTraversal(root) {
        const height = this.height(root);
        for(let i = 1; i<=height; i++) {
            this.printCurrentLevel(root, i);
        }
    }

    // helper method for level-order traversal (Using BFS)
    printCurrentLevel(node, lvl) {
        if(!node) {
             return;
        }
        if(lvl === 1) {
            console.log(node.value);
        } else if(lvl > 1) {
            this.printCurrentLevel(node.left, lvl - 1);
            this.printCurrentLevel(node.right, lvl - 1);
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
    // bst.printBst();
    // console.log('-----------------------------');
    // bst.remove(3);
    // bst.remove(12);
    // bst.printBst();
    // const searchNode = bst.searchNode(bst.root, 12);
    // console.log('searchedNode >>>>', searchNode);
    // console.log('NodeCount >>>', bst.countNodes(bst.root));
    // console.log('Diameter of tree >>>', bst.diameter(bst.root));
    // const arr = [];
    // bst.serialize(bst.root, arr);
    // console.log('serialized list >>>>', arr);
    // const list = [10, 3, 12, 2, 6, 9, 15];
    // bst.root = bst.deserialize(list, 0);
    bst.printBst();
    // bst.preOrderTraversal(bst.root);
    // bst.postOrderTraversal(bst.root);
    bst.levelOrderTraversal(bst.root);
})();