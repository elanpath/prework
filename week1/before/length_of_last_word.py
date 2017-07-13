class Solution:
    # @param A : string
    # @return an integer
    def lengthOfLastWord(self, A):
        result = 0
        seen_space = False
        for ch in A:
            if ch == " " and not seen_space:
                seen_space = True
            elif ch != " ":
                result = 1 if seen_space else result + 1
                seen_space = False

        return result
