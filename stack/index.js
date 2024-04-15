// Using linkedList

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertElement(val) {
        const newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size += 1;
    }

    getElement(index) {
        let itr = 0;
        if(this.head === null) {
            console.log('Stack is empty');
            return null;
        }
        if(index > this.size) {
            console.log('Invalid index...');
            return null;
        } else {
            if(index === 0) {
                return this.head;
            } else {
                let curr = this.head;
                while(itr < index && curr.next) {
                    curr = curr.next;
                    itr+=1;
                }
                return curr;
            }
        }
    }

    removeElement() {
        if(this.head === null) {
            console.log('Stack is empty');
            return null;
        } else {
            let prev = this.head;
            let curr = this.head.next;
            while(curr.next) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
        }
    }

    printNodes() {
        let curr = this.head;
            while(curr.next) {
                console.log(curr.value, '->')
                curr = curr.next;
            }
            console.log(curr.value)
    }
}

function perform() {
    const linkedList = new LinkedList();
    linkedList.insertElement(1);
    linkedList.insertElement(2);
    linkedList.insertElement(3);
    linkedList.insertElement(4);
    linkedList.printNodes();
    linkedList.removeElement();
    linkedList.printNodes();
}

perform();