var node = function(val, next) {
    return {
        data: val,
        next: next,
        log: function() {
            var currNode = this;
            while (currNode !== null) {
                console.log(currNode.data);
                currNode = currNode.next;
            }
        }
    };
};

// Definition for singly-linked list.
//function Node(data){
//this.data = data
//this.next = null
//}

module.exports = {
    //param A : head node of linked list
    //return the head node in the linked list
    subtract : function(A){
        var root = A;
        if (root == null) return root;

        var length = 0;
        var currNode = root;
        while (currNode !== null) {
            currNode = currNode.next;
            length++;
        }

        if (length <= 1) return A;

        if (length % 2 == 0) {
            var halfIndex = (length / 2) + 1;
        } else {
            var halfIndex = Math.floor(length / 2) + 2;
        }

        currNode = root;
        for (var i = 1; i < halfIndex; i++) {
            currNode = currNode.next;
        }

        var newList = node(currNode.data, null);
        while (currNode.next !== null) {
            var newNode = node(currNode.next.data, newList);
            newList = newNode;
            currNode = currNode.next;
        }

        var currRevNode = newList;
        var currANode = A;
        while (currRevNode !== null) {
            currANode.data = currRevNode.data - currANode.data;
            currANode = currANode.next;
            currRevNode = currRevNode.next;
        }

        return A;
    }
};

if (require.main == module) {
    var test = module.exports;
    var root = node(
        1, node(
            2, node(
                3, node(
                    4, node(5, null)
                )
            )
        )
    );
    root = test.subtract(root);
    root.log();
    
}
