// Stack

class Stack{
    constructor(){
        this.items = [];
    }

    add(element){
        return this.items.push(element);
    }

    remove(){
        if(this.items.length > 0){
            return this.items.pop()
        }
    }

    peek(){
        
    }

    size(){
        
    }
}