# https://www.interviewbit.com/problems/square-root-of-integer/
# Implement int sqrt(int x).

# Compute and return the square root of x.

# If x is not a perfect square, return floor(sqrt(x))

# Example :

# Input : 11
# Output : 3
# DO NOT USE SQRT FUNCTION FROM STANDARD LIBRARY

class Solution:
    # @param A : integer
    # @return an integer
    def sqrt(self, A):
        start = 0
        end = A

        while abs(start - end) > 1:
            middle = (start + end) / 2
            square = middle * middle
            if square == A:
                return middle
            elif square > A:
                end = middle
            else:
                start = middle
        return end if end * end <= A else start

if __name__ == '__main__':
    test = Solution();
    print test.sqrt(9);