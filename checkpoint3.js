"use strict";

var max_heap = function () {
    var arr = [];

    var max = function() {
        return arr[0];
    };

    var push = function (elem) {
        arr.push(elem);
        bubbleUp(arr.length - 1);
    };

    var pop = function () {
        var result = arr[0];
        var end = arr.pop();
        if (arr.length > 0) {
            arr[0] = end;
            sinkDown(0);
        }
        return result;
    };

    var bubbleUp = function(index) {
        var currIndex = index;
        var parentIndex = Math.floor((currIndex + 1) / 2) - 1;

        while (currIndex >= 0 && parentIndex >= 0 && arr[currIndex] > arr[parentIndex]) {
            var elem = arr[currIndex];
            var parent = arr[parentIndex];

            arr[currIndex] = parent;
            arr[parentIndex] = elem;

            currIndex = parentIndex;
            parentIndex = Math.floor((currIndex + 1) / 2) - 1;
        }
    };

    var sinkDown = function(index) {
        var currIndex = index;
        var child2Index = (currIndex + 1) * 2;
        var child1Index = child2Index - 1;

        while (child1Index < arr.length || child2Index < arr.length) {
            var elem = arr[currIndex];
            var newIndex = -1;
            var bigChildIndex = (child2Index >= arr.length || arr[child1Index] > arr[child2Index])? child1Index: child2Index;
            if (arr[bigChildIndex] > elem) {
                var temp = arr[bigChildIndex];
                arr[bigChildIndex] = elem;
                arr[currIndex] = temp;

                currIndex = bigChildIndex;
                child2Index = (currIndex + 1) * 2;
                child1Index = child2Index - 1;
            } else {
                break;
            }
        }
    };

    var log = function() {
        console.log(arr);
    };

    return Object.freeze({
        max: max,
        push: push,
        pop: pop,
        bubbleUp: bubbleUp,
        sinkDown: sinkDown,
        log: log
    });
    
};

module.exports = {
    //param A : array of integers
    //param k : integer
    //return an integer
    kthsmallest : function(A, k) {
        var maxh = max_heap();
        var i;
        for (i = 0; i < k; i++) {
            maxh.push(A[i]);
            // maxh.log();
        }
        for (i = k; i < A.length; i++) {
            maxh.push(A[i]);
            maxh.pop();
            // maxh.log();
        }

        return maxh.max();
    }
};

if (require.main == module) {
    var test = module.exports;
    console.log(test.kthsmallest([ 54, 96, 30, 79, 95, 6, 93, 91, 93, 63, 56, 11, 30, 58, 31, 100, 81, 25, 21, 76, 60, 18, 84, 8, 94, 3, 25, 84, 33, 74 ], 2));
}

// A : [ 94, 87, 100, 11, 23, 98, 17, 35, 43, 66, 34, 53, 72, 80, 5, 34, 64, 71, 9, 16, 41, 66, 96 ]
// B : 19
// 87

// A : [ 54, 96, 30, 79, 95, 6, 93, 91, 93, 63, 56, 11, 30, 58, 31, 100, 81, 25, 21, 76, 60, 18, 84, 8, 94, 3, 25, 84, 33, 74 ]
// B : 2
// 6