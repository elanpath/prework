module.exports = { 
    //param A : string
    //return an integer
    romanToInt : function(A){
        var romanToInt = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };
        
        var intToRoman = {
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M'
        };
        
        var result = 0;
        var i = 0;
        while (i < A.length) {
            var curr = A[i];
            var currValue = romanToInt[curr];
            result += currValue;
            
            var next = A[i + 1];
            if (next !== undefined) {
                var poss1 = currValue * 10;
                var poss2 = (currValue * 10) / 2;
                
                var nextValue = undefined;
                if (intToRoman[poss1] !== undefined && intToRoman[poss1] === next) {
                    nextValue = poss1;
                } else if (intToRoman[poss2] !== undefined && intToRoman[poss2] === next) {
                    nextValue = poss2;
                }
                
                if (nextValue !== undefined) {
                    result += nextValue - (currValue * 2);
                    i++;
                }
            }

            i++;
        }
        
        return result;
    }
};
