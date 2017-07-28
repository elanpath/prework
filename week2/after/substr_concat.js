module.exports = { 
    //param A : string
    //param B : array of strings
    //return a array of integers
    findSubstring : function(A, B){
        var result = [];
        var wordOccurs = {};
        var substrPos = {};
        var wordLength = B[0].length;
        for (var i = 0; i < B.length; i++) {
            var word = B[i];
            var wordCount = wordOccurs[word];
            wordOccurs[word] = wordCount === undefined? 1: wordCount + 1;
            var searchIndex = 0;
            var found = A.indexOf(word, searchIndex);
            while (found != -1) {
                substrPos[found] = word;
                searchIndex = found + 1;
                found = A.indexOf(word, searchIndex);
            }
        }
        
        var totalWords = B.length;
        var allPos = Object.keys(substrPos);
        for(var i = 0; i < allPos.length; i++) {
            var wordCount = 0;
            var currPos = Number(allPos[i]);
            var seenWord = {};
            var foundWord = substrPos[currPos];
            while (foundWord !== undefined && (seenWord[foundWord] === undefined || seenWord[foundWord] < wordOccurs[foundWord]) && wordCount < totalWords) {
                wordCount++;
                seenWord[foundWord] = seenWord[foundWord] === undefined? 1: seenWord[foundWord] + 1;
                currPos += wordLength;
                foundWord = substrPos[currPos];
            }
            
            if (wordCount === totalWords) {
                result.push(allPos[i]);
            }
        }
        
        return result;
    }
};


if (require.main === module) {
    var test = module.exports;
    //result: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 
    // console.log(test.findSubstring("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", [ "aaa", "aaa", "aaa", "aaa", "aaa" ]));
    // result: [97]
    console.log(test.findSubstring("abbaccaaabcabbbccbabbccabbacabcacbbaabbbbbaaabaccaacbccabcbababbbabccabacbbcabbaacaccccbaabcabaabaaaabcaabcacabaa", [ "cac", "aaa", "aba", "aab", "abc" ]));
}
