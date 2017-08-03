# https://www.interviewbit.com/problems/identical-binary-trees/
// Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// Return 0 / 1 ( 0 for false, 1 for true ) for this problem

// Example :

// Input : 

//    1       1
//   / \     / \
//  2   3   2   3

// Output : 
//   1 or True

// Definition for a  binary tree node
//   function TreeNode(data){
//    this.data = data
//    this.left = null
//    this.right = null
//   }

module.exports = { 
    //param A : root node of tree
    //param B : root node of tree
    //return an integer
    isSameTree : function equality(A, B){
        var aVal = A !== null? A.data: null;
        var bVal = B !== null? B.data: null;
        
        if (aVal !== bVal) {
            return 0;
        }
        
        var aLeft = A !== null? A.left: null;
        var bLeft = B !== null? B.left: null;
        var leftEqual = true;
        if (aLeft || bLeft) {
            leftEqual = equality(aLeft, bLeft);
        }
        
        var aRight = A !== null? A.right: null;
        var bRight = B !== null? B.right: null;
        var rightEqual = true;
        if (aRight || bRight) {
            rightEqual = equality(aRight, bRight);
        }
        
        return (leftEqual && rightEqual)? 1: 0;
    }
};
