# Linked lists

class linked_list:
    def __init__(self):
        self.head = None
        self.size = 0
    
    # def append(value):
        
    def prepend(self,value):
        self.head = Node(value, self.head)
        self.size +=1

    def size(self):
         return self.size
    
    # head

    # tail

    # get at 

    # pop


class Node:
    def __init__(self,value, nextNode = None):
            self.value = value
            self.nextNode = nextNode
