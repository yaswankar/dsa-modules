class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if(!this.rear && !this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if(!this.front) {
            console.log('No elements availabe in queue');
            return null;
        }
        this.front = this.front.next;
        if(!this.front.next) {
            this.rear = null;
        }
    }

    printQueue() {
        let curr = this.front;
        while(curr.next) {
            console.log(curr.value);
            curr = curr.next;
        }
        console.log(curr.value);
    }
}

function perform() {
    const linkedList = new LinkedList();
    linkedList.enqueue(1);
    linkedList.enqueue(2);
    linkedList.enqueue(3);
    linkedList.enqueue(4);
    linkedList.enqueue(5);
    linkedList.printQueue();
    console.log('--------------');
    linkedList.dequeue();
    linkedList.printQueue();
}

perform();