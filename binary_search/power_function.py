# https://www.interviewbit.com/problems/implement-power-function/
# Implement pow(x, n) % d.

# In other words, given x, n and d,

# find (xn % d)

# Note that remainders on division cannot be negative. 
# In other words, make sure the answer you return is non negative.

# Input : x = 2, n = 3, d = 3
# Output : 2

# 2^3 % 3 = 8 % 3 = 2.

def negMod(q, d):
    mod = abs(q) % d
    return mod if q >= 0 else d - mod

class Solution:
    # @param x : integer
    # @param n : integer
    # @param d : integer
    # @return an integer
    
    def __init__(self):
        self.memoize = {}

    def pow(self, x, n, d):

        if (x == 0):
            return 0

        if (n == 0):
            return 1
        
        if (n == 1):
            return negMod(x, d)
        
        if (n in self.memoize):
            return self.memoize[n]
        else:
            firstHalf = n / 2
            secondHalf = n - firstHalf
            firstRes = self.pow(x, firstHalf, d)
            secondRes = self.pow(x, secondHalf, d)

            result = self.memoize[n] = negMod(firstRes * secondRes, d)
            return result
