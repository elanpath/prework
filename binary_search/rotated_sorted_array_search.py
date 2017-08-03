# https://www.interviewbit.com/problems/rotated-sorted-array-search/
# Suppose a sorted array is rotated at some pivot unknown to you beforehand.

# (i.e., 0 1 2 4 5 6 7  might become 4 5 6 7 0 1 2 ).

# You are given a target value to search. If found in the array, return its index, otherwise return -1.

# You may assume no duplicate exists in the array.

# Input : [4 5 6 7 0 1 2] and target = 4
# Output : 0

# NOTE : Think about the case when there are duplicates. Does your current solution work? How does the time complexity change?*

def findSplit(A, start, end):
    middle = start + ((end - start) / 2)
    if middle + 1 == len(A) or A[middle] > A[middle + 1]:
        return middle
    
    if A[middle] < A[0]:
        return findSplit(A, start, middle - 1)
    else:
        return findSplit(A, middle + 1, end)

def bsearch(A, num, start, end):
    if start > end:
        return -1
    
    middle = start + ((end - start) / 2)
    if A[middle] == num:
        return middle
    
    elif num < A[middle]:
        return bsearch(A, num, start, middle - 1)
    
    else:
        return bsearch(A, num, middle + 1, end)
    

class Solution:
    # @param A : tuple of integers
    # @param B : integer
    # @return an integer
    def search(self, A, B):
        greatest_index = findSplit(A, 0, len(A) - 1)
        
        if B > A[greatest_index] or (greatest_index + 1 < len(A) and B < A[greatest_index + 1]):
            return -1
        
        if B >= A[0] and B <= A[greatest_index]:
            return bsearch(A, B, 0, greatest_index)
        
        elif greatest_index + 1 < len(A):
            return bsearch(A, B, greatest_index + 1, len(A) - 1)
        
        else:
            return -1
