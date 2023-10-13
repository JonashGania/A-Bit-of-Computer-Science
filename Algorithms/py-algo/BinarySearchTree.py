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
                self.insert_node(node.rigt, new_node)