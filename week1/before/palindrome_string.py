class Solution:
    # @param A : string
    # @return an integer
    def isPalindrome(self, A):
        forward = 0
        backward = len(A) - 1
        palindrome = 1
        while forward < backward:

            fchar = A[forward].lower()
            bchar = A[backward].lower()

            if not fchar.isalnum():
                forward += 1
            elif not bchar.isalnum():
                backward -= 1
            elif fchar == bchar:
                forward += 1
                backward -= 1
            else:
                palindrome = 0
                break

        return palindrome
