# using iteration, write a function which takes a number and returns an array containing 
# that many numbers from the fibonacci sequence.


def fibs(num, arr=[0,1]):
    a, b = 0, 1

    if(num == 1):
        return [0]
    elif (num == 2):
        return arr
    else:
        for i in range(3, num + 1):
            c = a + b
            a = b
            b = c
            arr.append(b)

        return arr

fibs(10)

# using recursive, write a function which takes a number and returns an array containing 
# that many numbers from the fibonacci sequence.

def fibs_Rec(num, arr=[0,1]):
    if num == 1:
        return [0]
    elif num == 2:
        return arr
    else:
        next_num = arr[-1] + arr[-2]
        arr.append(next_num)

        return fibs_Rec(num - 1, arr)
    
fibs_Rec(10)