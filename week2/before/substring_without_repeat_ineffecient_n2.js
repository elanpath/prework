module.exports = { 
    //param A : string
    //return an integer
    lengthOfLongestSubstring : function(A){
        if (A.length === 0) {
            return 0;
        }
        var result = 1;
        for (var i = 0; i < A.length; i++) {
            var chars = {};
            var currLen = 0;
            for (var j = i; j < A.length; j++) {
                var currChar = A[j];
                if (chars[currChar] === undefined) {
                    chars[currChar] = 1;
                    currLen++;
                } else {
                    break;
                }
            }
            if (currLen > result) {
                result = currLen;
            }
        }

        return result;
    }
};

if (require.main == module) {
    var test = module.exports;
    console.log(test.lengthOfLongestSubstring(''));
}
