# Stack

class Stack:
    def __init__(self):
        self.items = []

    def add(self, element):     # add an element at the top of the stack
        return self.items.append(element)
    
    def remove(self):   # remove the topmost element of the stack
        length = len(self.items)

        if length == 0:
            return "Underflow"
        
        return self.items.pop()
        
    def peek(self):     # peek the topmost element of the stack
        last = len(self.items) - 1
        return self.items[last]

    def size(self):     # return the size of the stack
        return len(self.items)
    
    def print(self):       # print stack
        string = ""

        for item in self.items:
            string += str(item) + " "
        
        return string

stack = Stack()

stack.add(10)
stack.add(20)
stack.add(30)
stack.add(40)
stack.remove()

print(stack.print())