function sortNumber(a,b) {
    return a - b;
}

module.exports = { 
 //param A : array of integers
 //return a array of integers
 wave : function(A){
        A.sort(sortNumber);
        // console.log(A);
        var result = [];
        for (var i=0; i < A.length; i += 2) {
            if (i + 1 < A.length) {
                result.push(A[i+1]);
            }
            result.push(A[i]);
        }
        return result;
 }
};
