// Linked lists

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value){      // Adds a new node at the end of the list
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

    prepend(value){     // adds new node to the start of the list
        this.head = new Node(value, this.head);
        this.size++;
    }

    insertAt(value, index){     // insert new node at the given index
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

    removeAt(index){    // removes a node in a given index
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if(index === 0){
            this.head = current.next;
        } else {
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }

    size(){     // return list size
        return this.size;
    }

    head(){     // return first node
        return this.head.value;
    }

    tail(){     // return last node
        let current = this.head;

        while(current && current.next){
            current = current.next;
        }

        console.log(current.value);
    }

    getAt(index){       // return node at given index
        let current = this.head;
        let count = 0
        
        while(current){
            if (count === index){
                console.log(current.value);
                
            }
            count++;
            current = current.next;
        }

        return null
    }
        
    pop(){      // remove last element of the list
        if(!this.head){
            return
        }

        if(!this.head.next){
            this.head = null;
            this.size = 0;
            return;
        }

        let current = this.head;
        let previous

        while(current.next){
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.size--;
    }
    
    contains(value){    // return true if value is in the list, otherwise false
        let current = this.head;

        while(current){
            if(current.value === value){
                return true;
            }

            current = current.next;
        }

        return false;
    }

    find(value){    // find the index of the given node value
        let current = this.head;
        let index = 0;

        while(current){
            if(current.value === value){
                return index;
            }
            index++;
            current = current.next;
        }

        return null;
    }

    toString(){     // print the node values
        if(!this.head){
            return;
        }
        
        let current = this.head;
        let stringList = "";

        while(current){
            stringList += `(${current.value}) -> `
            current = current.next;
        }

        stringList += "null";
        console.log(stringList);
    }
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
list.append(800);
list.insertAt(500, 0);
list.pop();

list.toString()

