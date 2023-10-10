// Linked lists

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value){
        let node = new Node(value);
        let current;

        if(this.head === null){
            this.head = node
        } else {
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node
        }

        this.size++;
    }

    prepend(value){
        this.head = new Node(value, this.head);
        this.size++;
    }

    insertAt(value, index){
        if(index > 0 && index > this.size){
            return;
        }

        if(index === 0){
            this.prepend(value);
            return;
        }

        const node = new Node(value);
        let current, previous;
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    size(){
        return this.size;
    }

    // head(){
        
    // }

    // tail
        // get lists tail node

    // get at(index)
        // get list at index
        
    // pop

    // print(){
    //     let current = this.head;

    //     while(current){
    //         console.log(current.value);
    //         current = current.next;
    //     }
    // }
}

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}


const list = new linkedList();
list.prepend(100);
list.prepend(300);
list.append(400);
list.insertAt(500, 2);

console.log(list);

