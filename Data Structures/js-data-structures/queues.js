// Queue

class Queue{
    constructor(){
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueue(item){      // add elements at the end of queue
        this.items[this.backIndex] = item
        this.backIndex++
        return item 
    }

    dequeue(){      // remove elements at the front of queue
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }

    peek(){     // peek the front element of the queue
        return `front -> ${this.items[this.frontIndex]}`
    }

    size(){     // return the size of queue
        return this.backIndex - this.frontIndex
    }

    printQueue(){       // print queue
        return this.items
    }

}

const queue = new Queue();

console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
queue.dequeue()

console.log(queue.peek())
console.log(queue.size())

const print = queue.printQueue()
console.log(print)