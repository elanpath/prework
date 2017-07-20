// Definition for singly-linked list.
//   function Node(data){
//    this.data = data
//    this.next = null
//   }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
    swapPairs : function(A){
        if (!A.next) return A;
        
        var firstNode = A;
        var secondNode = A.next;
        var remHead = secondNode.next;
        A = secondNode;
        A.next = firstNode;
        
        var lastNode = A.next;
        lastNode.next = null;
        while (remHead) {
            firstNode = remHead;
            secondNode = remHead.next;
            remHead = secondNode? secondNode.next: firstNode.next;
            
            if (secondNode) {
                lastNode.next = secondNode;
                secondNode.next = firstNode;
            } else {
                lastNode.next = firstNode;
            }

            lastNode = firstNode;
            lastNode.next = null;
        }
        
        return A;
    }
};
