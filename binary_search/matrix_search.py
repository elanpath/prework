# https://www.interviewbit.com/problems/matrix-search/
# Write an efficient algorithm that searches for a value in an m x n matrix.

# This matrix has the following properties:

# Integers in each row are sorted from left to right.
# The first integer of each row is greater than or equal to the last integer of the previous row.
# Example:

# Consider the following matrix:

# [
#   [1,   3,  5,  7],
#   [10, 11, 16, 20],
#   [23, 30, 34, 50]
# ]
# Given target = 3, return 1 ( 1 corresponds to true )

# Return 0 / 1 ( 0 if the element is not present, 1 if the element is present ) for this problem

class Solution:
    # @param A : list of list of integers
    # @param B : integer
    # @return an integer
    def searchMatrix(self, A, B):
        rows = len(A)
        start = 0
        end = rows - 1
        # import pdb; pdb.set_trace();
        while (start <= end):
            middle = start + ((end - start) / 2);
            val = A[middle][0]
            if val == B:
                return 1
            elif val > B:
                end = middle - 1
            else:
                start = middle + 1

        if (end >= rows or A[end][0] > B) and (start >= rows or A[start][0] > B):
            return 0

        search_row = start if (start < rows and A[start][0] < B) else end

        start = 0
        row_length = end = len(A[search_row]) - 1

        while (start <= end):
            middle = start + ((end - start) / 2);
            val = A[search_row][middle]
            if val == B:
                return 1
            elif val > B:
                end = middle - 1
            else:
                start = middle + 1

        return 0
