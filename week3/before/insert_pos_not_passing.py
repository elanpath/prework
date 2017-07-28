class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def searchInsert(self, A, B):
        start = 0
        end = len(A) - 1;
        # import pdb; pdb.set_trace();
        while start < end:
            middle_pos = start + ((end - start) / 2)
            middle_val = A[middle_pos]
            if middle_val >= B:
                end = middle_pos - 1
            else:
                start = middle_pos + 1
                
        return end if A[end] >= B else end + 1;
    
if __name__ == '__main__':
    test = Solution();
    array = []
    for i in range(0, 1000000000):
        array.append(i);
    print test.searchInsert(array, 5);