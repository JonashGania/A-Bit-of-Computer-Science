// balanced Binary Search Tree


class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null
    }

    insert(data){
        const newNode = new Node(data);

        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null){
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key){
        if(node === null){
            return null
        }

        else if(key < node.data){
            node.left = this.removeNode(node.left, key);
            return node;
        }

        else if (key > node.data){
            node.right = this.removeNode(node.right, key);
            return node;
        }

        else{
            if(node.right === null && node.left === null){
                node = null;
                return node

            }
            
            if(node.left === null) {
                node = node.left;
                return node;
            }

            else if (node.right === null){
                node = node.right;
                return node;
            }

            const aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node){
        if(node.left === null){
            return node
        } else
            return this.findMinNode(node.left)
    }

    getRootNode(){
        return this.root
    }
}

const bst = new Tree();

bst.insert(25);
bst.insert(14);
bst.insert(35);
bst.insert(13);
bst.insert(33);
bst.insert(2);


console.log(bst.getRootNode());