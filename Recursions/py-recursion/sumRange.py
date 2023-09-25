# Using recursion, return the sum of all numbers from 1 up to the number passed in.

def sum_range(n):
    if n == 1:
        return 1
    
    return n + sum_range(n - 1)

sum_range(4);

#  sumRange(4)
#     4 + sumRange(4 - 1)
#          3 + sumRange(3 - 1)
#             2 + sumRange(2 - 1)
#              return 2 + 1
#          return 3 + 3
#     return 4 + 6
#  = 10 