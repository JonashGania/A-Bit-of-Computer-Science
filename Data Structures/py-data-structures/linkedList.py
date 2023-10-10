# Linked lists

class linked_list:
    def __init__(self):
        self.head = None
        self.size = 0
    
    def append(self, value):
        node = Node(value)

        if self.head == None:
            self.head = node
        else:
            current = self.head

            while current.next:
                 current = current.next

            current.next = node

        self.size += 1    
        
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
