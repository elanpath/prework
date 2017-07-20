// Definition for singly-linked list.
//   function Node(data){
//    this.data = data
//    this.next = null
//   }

module.exports = { 
    //param A : head node of linked list
    //return the head node in the linked list
    deleteDuplicates : function(A){
        if (!A) return A;

        var nonDupeElement = A;
        var currElement = A.next;
        while (currElement) {
            var next = currElement.next;
            if (currElement.data !== nonDupeElement.data) {
                nonDupeElement.next = currElement;
                nonDupeElement = nonDupeElement.next;
            }
            currElement = next;
        }
        nonDupeElement.next = null;
        return A;
    }
};
