// https://www.interviewbit.com/problems/permutations/
// Given a collection of numbers, return all possible permutations.

// Example:

// [1,2,3] will have the following permutations:

// [1,2,3]
// [1,3,2]
// [2,1,3] 
// [2,3,1] 
// [3,1,2] 
// [3,2,1]
//  NOTE
// No two entries in the permutation sequence should be the same.
// For the purpose of this problem, assume that all the numbers in the collection are unique.
//  Warning : DO NOT USE LIBRARY FUNCTION FOR GENERATING PERMUTATIONS.
// Example : next_permutations in C++ / itertools.permutations in python.
// If you do, we will disqualify your submission retroactively and give you penalty points. 

var helper = function (A) {
    if (A.length == 1) {
        return [A];
    }

    var result = [];
    for (var i = 0; i < A.length; i++) {
        var newA = A.slice();
        newA.splice(i, 1);
        var subResult = helper(newA);
        
        subResult.forEach(function (res) {
            var permRes = [A[i]];
            // console.log(res);
            Array.prototype.push.apply(permRes, res);
            result.push(permRes);
        });
    }
    return result;
};

module.exports = { 
    //param A : array of integers
    //return a array of array of integers
    permute : function(A){
        return helper(A);
    }
};
