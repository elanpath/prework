var findAt = function(A, B, i) {
    var aPos = i;
    for (bPos = 0; bPos < B.length; aPos++, bPos++) {
        if (A[aPos] !== B[bPos]) {
            return false;
        }
    }
    return true;
};

module.exports = { 
    //param A : string
    //param B : string
    //return an integer
    strStr : function(A, B){
        var result = -1;
        for (var i = 0; i < A.length; i++) {
            var found = findAt(A, B, i);
            if (found) {
                result = i;
                break;
            }
        }
        return result;
    }
};
