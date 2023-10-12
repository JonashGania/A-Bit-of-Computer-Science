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

    def insert_at(self, value, index):
         if index > 0 and index > self.size:
              return
         
         if index == 0:
              self.prepend(value)
              return
         
         node = Node(value)
         current = self.head
         count = 0

         while count < index:
              previous = current
              count += 1
              current = current.next

         node.next = current
         previous.next = node

         self.size += 1

    def remove_at(self, index):
        if index > 0 and index > self.size:
            return
         
        current = self.head
        count = 0

        if index == 0:
            self.head = current.next
        else:
            while count < index:
                count += 1
                prevous = current
                current = current.next
            
            prevous.next = current.next
        
        self.size -= 1
            

    def size(self):
         return self.size
    
    def head(self):
         return self.head.value

    def tail(self):
         current = self.head

         while current and current.next:
              current = current.next

         print(current.value)

    def get_at(self, index):
        current = self.head
        count = 0

        while current:
            if count == index:
                print(current.value)
            
            count += 1
            current = current.next

        
        return None


    def pop(self):
         if not(self.head):
              return
         
         if not(self.head.next):
              self.head = None
              self.size = 0
              return
         
         current = self.head

         while current.next:
              previous = current
              current = current.next

         previous.next = current.next
         self.size -= 1
    
    def contains(self, value):
         current = self.head

         while current:
              if current.value == value:
                   return True
              
              current = current.next
         
         return False
    
    def find(self, value):
         current = self.head
         index = 0


         while current:
              if current.value == value:
                   return index
              
              index += 1
              current = current.next
         
         return None
    
    def to_string(self):
         current = self.head
         string_list = ""

         while current:
              string_list += f'({current.value}) -> '
              current = current.next
         
         string_list += "null"
         print(string_list)

class Node:
    def __init__(self,value, next = None):
            self.value = value
            self.next = next


list = linked_list()
list.append(100)
list.append(200)
list.prepend(50)
list.insert_at(150,2)
list.pop()

print(list.find(100))