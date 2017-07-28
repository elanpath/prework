// Definition for singly-linked list.
//   function Node(data){
//    this.data = data
//    this.next = null
//   }

module.exports = { 
    //param A : head node of linked list
    //param B : integer
    //return the head node in the linked list
    partition : function(A, B){
        var left = null;
        var right = null;
        var currNode = A;
        
        var leftCurr = null;
        var rightCurr = null;
        while (currNode !== null) {
            var data = currNode.data;
            var moveNode = currNode;
            currNode = currNode.next;
            moveNode.next = null;
            if (data < B) {
                if (left === null) {
                    left = leftCurr = moveNode;
                } else {
                    leftCurr.next = moveNode;
                    leftCurr = leftCurr.next;
                }
            } else {
                if (right === null) {
                    right = rightCurr = moveNode;
                } else {
                    rightCurr.next = moveNode;
                    rightCurr = rightCurr.next;
                }
            }
        }
        
        if(leftCurr !== null) {
            leftCurr.next = right;
            return left;
        } else {
            return right;
        }
    }
};
