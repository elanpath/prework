module.exports = {
    //param A : array of integers
    //return an integer
    longestConsecutive : function(A){
        if (A === null || A.length == 0) return 0;

        var starters = A.reduce(function (acc, curr) {
            acc[curr] = true;
            return acc;
        }, {});

        var result = 1;
        for (var i = 0; i < A.length; i++) {
            var elem = A[i];
            if (starters[elem - 1] !== true) {
                var nextElem = elem + 1;
                while (starters[nextElem] === true) {
                    nextElem++;
                }

                var seqLength = nextElem - elem;
                result = Math.max(result, seqLength);
            }
        }

        return result;
    }
};

if (require.main == module) {
    var test = module.exports;
    console.log(test.longestConsecutive([100, 4, 200, 1, 3, 2]));
}
