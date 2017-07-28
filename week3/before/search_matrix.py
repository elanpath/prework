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

if __name__ == '__main__':
    test = Solution()
    print test.searchMatrix([
  [1, 2, 2, 3, 4, 4, 6, 7, 8],
  [10, 18, 19, 22, 22, 24, 27, 27, 27],
  [28, 28, 29, 29, 29, 32, 34, 35, 36],
  [37, 37, 40, 40, 43, 46, 46, 47, 48],
  [49, 51, 53, 53, 55, 55, 60, 62, 62],
  [64, 68, 70, 70, 73, 77, 81, 82, 82],
  [84, 86, 88, 90, 95, 96, 96, 99, 100]
], 96)