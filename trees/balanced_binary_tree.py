# https://www.interviewbit.com/problems/balanced-binary-tree/
# Given a binary tree, determine if it is height-balanced.

#  Height-balanced binary tree : is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1. 
# Return 0 / 1 ( 0 for false, 1 for true ) for this problem

# Example :

# Input : 
#           1
#          / \
    #         2   3

# Return : True or 1 

# Input 2 : 
#          3
#         /
#        2
#       /
#      1

# Return : False or 0 
#          Because for the root node, left subtree has depth 2 and right subtree has depth 0. 
#          Difference = 2 > 1. 

# Definition for a  binary tree node
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

def isBalancedHelper(A):
    if (not A):
        return {
            'leftDepth': 0,
            'rightDepth': 0,
            'balanced': True
        }
    
    leftCheck = isBalancedHelper(A.left)
    if (not leftCheck['balanced']):
        return {
            'balanced': False
        }
    
    rightCheck = isBalancedHelper(A.right)
    if (not rightCheck['balanced']):
        return {
            'balanced': False
        }
    
    leftMax = max(leftCheck['leftDepth'], leftCheck['rightDepth'])
    rightMax = max(rightCheck['leftDepth'], rightCheck['rightDepth'])
    
    result = {
        'leftDepth': leftMax + 1,
        'rightDepth': rightMax + 1
    }
    
    result['balanced'] = abs(result['leftDepth'] - result['rightDepth']) <= 1
    return result

class Solution:
    # @param A : root node of tree
    # @return an integer
    def isBalanced(self, A):
        return 1 if isBalancedHelper(A)['balanced'] else 0