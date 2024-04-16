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
        if(!this.front && !this.rear) {
            this.front = newNode;
            this.rear = newNode;
            this.rear.next = newNode;
        } else {
            newNode.next = this.front;
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue(val) {
        const newNode = new Node(val);
        if(!this.front && !this.rear) {
            console.log('Queue empty');
            return null;
        } else {
            this.front = this.front.next;
            this.rear.next = this.front;
        }
    }

    listElements() {
        let curr = this.front;
        while(curr.next != this.front) {
            console.log(curr.value);
            curr = curr.next;
        }
        console.log(curr.value)
    }
}

function perform() {
    const cll = new LinkedList();
    cll.enqueue(1);
    cll.enqueue(2);
    cll.enqueue(3);
    cll.enqueue(4);
    cll.enqueue(5);
    cll.listElements();
    cll.dequeue();
    console.log('Elements after dequeuing');
    cll.listElements();
}

perform();