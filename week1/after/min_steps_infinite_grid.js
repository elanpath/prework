module.exports = { 
    //param A : array of integers
    //param B : array of integers
    //return an integer
    coverPoints : function(A, B){
        var result = 0;
        var prevX = A[0];
        var prevY = B[0];
        for (var i = 1; i < A.length; i++) {
            var currX = A[i];
            var currY = B[i];
            
            var diffX = Math.abs(currX - prevX);
            var diffY = Math.abs(currY - prevY);
            result += Math.max(diffX, diffY);
            
            prevX = currX;
            prevY = currY;
        }
        return result;
    }
};
