# https://www.interviewbit.com/courses/programming/topics/bit-manipulation/
# Write a function that takes an unsigned integer and returns the number of 1 bits it has.

# Example:

# The 32-bit integer 11 has binary representation

# 00000000000000000000000000001011
# so the function should return 3.

# Note that since Java does not have unsigned int, use long for Java

class Solution:
    # @param A : integer
    # @return an integer
    def numSetBits(self, A):
        result = 0;
        while (A != 0):
            if A & 1 == 1:
                result += 1
            A = A >> 1

        return result;
