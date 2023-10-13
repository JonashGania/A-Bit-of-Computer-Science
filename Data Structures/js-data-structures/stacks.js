// Stack

class Stack{
    constructor(){
        this.items = [];
    }

    add(element){   // add an element at the top of the stack
        return this.items.push(element);
    }

    remove(){   // removes the the topmost element of the stack
        if(this.items.length === 0){
            return 'Undeflow'
        }

        return this.items.pop()
    }

    peek(){     // peek the topmost element of the stack
        return this.items[this.items.length - 1]
    }

    size(){     // return the size of the stack
        return this.items.length
    }

    print(){      // print stack
        let str = ""

        for(let i = 0; i < this.items.length; i++){
            str += this.items[i] + " ";
        }

        return str
    }
}

const stack = new Stack()

stack.add(100);
stack.add(200);
stack.add(300);
stack.add(400);
stack.remove();

console.log(stack.peek())
console.log(stack.size())
console.log(stack.print())