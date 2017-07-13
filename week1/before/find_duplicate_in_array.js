module.exports = { 
 //param A : array of integers
 //return an integer
 repeatedNumber : function(A){
     var seen = {};
     for (var i = 0; i < A.length; i++) {
         if (seen[A[i]] === true) {
             return A[i];
         } else {
             seen[A[i]] = true;
         }
     }
 }
};
