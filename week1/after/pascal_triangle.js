module.exports = { 
    //param A : integer
    //return a array of array of integers
    generate : function(A){
        var result = [];
        var prevRow = [1];
        for (var i = 0; i < A; i++) {
            var currRow = [];
            for (var j = 0; j <= i; j++) {
                var prev1 = (prevRow[j] === undefined)? 0: prevRow[j];
                var prev2 = (prevRow[j - 1] === undefined)? 0: prevRow[j - 1];
                currRow.push(prev1 + prev2);
            }
            result.push(currRow);
            prevRow = currRow;
        }
        return result;
    }
};
