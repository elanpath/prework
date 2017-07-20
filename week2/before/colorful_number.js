module.exports = { 
 //param A : integer
 //return an integer
 colorful : function(A){
     var products = {};
     var a = A.toString();
     // console.log(a);
     for (var i = 0; i < a.length; i++) {
         var currProd = 1;
         for (var j = i; j < a.length; j++) {
             var newProd = currProd * a[j];
             // console.log(a[j] + " " + newProd);
             if (products[newProd] === undefined) {
                 products[newProd] = 1;
             } else {
                 return 0;
             }
             currProd = newProd;
         }
     }
     return 1;
 }
};

if (require.main == module) {
    var test = module.exports;
    console.log(test.colorful(23));
}