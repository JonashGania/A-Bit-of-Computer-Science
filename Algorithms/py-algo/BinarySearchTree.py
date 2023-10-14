# balanced Binary Search Tree


class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class Tree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        newNode = Node(data)

        if self.root == None:
            self.root = newNode
        else:
            self.insert_node(self.root, newNode)

    def insert_node(self, node, new_node):
        if new_node.data < node.data:
            if node.left == None:
                node.left = new_node
            else:
                self.insert_node(node.left, new_node)
        else:
            if node.right == None:
                node.right = new_node
            else:
                self.insert_node(node.right, new_node)

    def remove(self, data):
        self.root = self.remove_node(self.root, data)

    def remove_node(self, node, key):
        if node == None:
            return None
        
        elif key < node.data:
            node.left = self.remove_node(node.left, key)
            return node
        
        elif key > node.data:
            node.right = self.remove_node(node.right, key)
            return node
        
        else:
            if node.left == None and node.right == None:
                node = None
                return node
            
            if node.left == None:
                node = node.left
                return node
            
            elif node.right == None:
                node = node.right
                return node
            
            aux = self.find_min_node(node.right)
            node.data = aux.data

            node.right = self.remove_node(node.right, aux.data)
            return node

    def find_min_node(self,node):
        if node.left == None:
            return None

        else:
            return self.find_min_node(node.left)
        
    def get_root_node(self):
        return self.root
    

bst = Tree()

bst.insert(23)
bst.insert(22)
bst.insert(43)
bst.insert(56)
bst.insert(6)
bst.insert(3)

print(bst.get_root_node())