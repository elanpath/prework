// Definition for singly-linked list.
//   function Node(data){
//    this.data = data
//    this.next = null
//   }

var newNode = function (data, next) {
    if (!next) next = null;
    return {
        data: data,
        next: next
    }
};

module.exports = { 
    //param A : head node of linked list
    //param B : head node of linked list
    //return the head node in the linked list
    addTwoNumbers : function(A, B){
        var head1 = A;
        var head2 = B;
        var carry = 0;
        var result = null;
        var currNode = null;
        while (head1 !== null || head2 !== null || carry !== 0) {
            var val1 = head1 !== null? head1.data: 0;
            var val2 = head2 !== null? head2.data: 0;
            var sum = val1 + val2 + carry;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            if (result === null) {
                result = currNode = newNode(sum);
            } else {
                currNode.next = newNode(sum);
                currNode = currNode.next;
            }
            
            head1 = head1 !== null? head1.next: null;
            head2 = head2 !== null? head2.next: null;
        }

        return result;
    }
};


if (require.main === module) {
    var test = module.exports;
    console.log(test.addTwoNumbers(newNode(9,
                                           newNode(9,
                                                   newNode(1))),
                                   newNode(1)));
}
