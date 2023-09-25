# Factorial using recursion

def factorial(n):
    if n == 1 or n == 0:
        return 1
    
    return n * factorial(n - 1)

factorial(4);

#   factorial(4)
#       4 * factorial(4 - 1)
#           3 * factorial(3 - 1)
#               2 * factorial(2 - 1)
#               return 2 * 1
#           return 3 * 2
#       return 4 * 6
# = 24