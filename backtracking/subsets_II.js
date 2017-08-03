// https://www.interviewbit.com/problems/subsets-ii/
// Given a collection of integers that might contain duplicates, S, return all possible subsets.

//  Note:
// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.
// The subsets must be sorted lexicographically.
// Example :
// If S = [1,2,2], the solution is:

// [
// [],
// [1],
// [1,2],
// [1,2,2],
// [2],
// [2, 2]
// ]

var subsets = function (A, i, elems, result) {
    if (i >= A.length) {
        return;
    }
    
    var count = 0;
    while (A[i + count] === A[i]) {
        var newElems = elems.slice();
        for (var k = 0; k <= count; k++) {
            newElems.push(A[i]);
        }
        result.push(newElems);
        count++;
    }
    
    for (var j = count; j >= 0; j--) {
        var newElems = elems.slice();
        for (var k = 1; k <= j; k++) {
            newElems.push(A[i]);
        }

        subsets(A, i + count, newElems, result);
    }
};

module.exports = {
    //param A : array of integers
    //return a array of array of integers
    subsetsWithDup : function(A){
        A.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });
        
        var result = [[]];
        subsets(A, 0, [], result);
        return result;
    }
};
