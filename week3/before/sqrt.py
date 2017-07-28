class Solution:
    # @param A : integer
    # @return an integer
    def sqrt(self, A):
        start = 0
        end = A

        import pdb; pdb.set_trace();
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