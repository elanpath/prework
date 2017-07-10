module.exports = {
    //param A : integer
    //return a array of array of integers
    prettyPrint : function(A){
        var result = [];
        var start = -(A - 1);
        var end = A - 1;
        
        for (var x = start; x <= end; x++) {
            var row = []
            for (var y = start; y <= end; y++) {
                var currVal = Math.max(Math.abs(x), Math.abs(y)) + 1;
                row.push(currVal);
            }
            result.push(row);
        }

        return result;
    }
};


if (require.main == module) {
    var test = module.exports;
    console.log(test.prettyPrint(4));
}
