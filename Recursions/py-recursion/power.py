# Using recursion, write  a function which takes in a base and an exponent.

def power(base, exp):
    if exp == 0:
        return 1
    
    return base * power(base, exp - 1)

power(2, 3)

# power(2, 3)
#      2 * power(2, 3 -1)
#         2 * power(2, 2 - 1)
#              2 * power(2, 1 - 1)
#              return 2 * 1
#          return 2 * 2
#      return 2 * 4
# = 8