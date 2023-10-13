# Queue

class Queue:
    def __init__(self):
        self.items = {}
        self.front_index = 0
        self.back_index = 0
        
    def enqueue(self, item):    # add elements at the end of queue
        self.items[self.back_index] = item
        self.back_index += 1
        return item
    
    def dequeue(self):      # remove elements at the front of queue
        item = self.items[self.front_index]
        del self.items[self.front_index]
        self.front_index += 1
        return item

    def peek(self):     # peek the front element of the queue
        return f"front -> {self.items[self.front_index]}"
    
    def size(self):     # return the size of queue
        return self.back_index - self.front_index
    
    def print_queue(self):      # print queue
        return self.items
    

queue = Queue()

print(queue.enqueue(10))
print(queue.enqueue(20))
print(queue.enqueue(30))
queue.dequeue()
print(queue.peek())
print(queue.size())
print(queue.print_queue())