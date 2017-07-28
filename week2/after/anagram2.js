var solution = function (input_lines) {
    // now we can read/parse input
    var n = input_lines[0];
    for (var i = 1; i <= n; i++) {
        var text = input_lines[i];
        var len = text.length;
        if (len % 2 != 0) {
            process.stdout.write("-1\n");
            continue;
        }
        var half = len / 2;
        var chars1 = {};
        var chars2 = {};
        for (var j = 0; j < len; j++) {
            var chars = j < half? chars1: chars2;
            var count = chars[text[j]];
            chars[text[j]] = count === undefined? 1: count + 1;
        }
        var missing1_counts = {};
        var word1Chars = Object.keys(chars1);
        var missing1_counter = 0;
        for (j = 0; j < word1Chars.length; j++) {
            var char = word1Chars[j];
            var word1CharCount = chars1[char];
            var word2CharCount = chars2[char];
            if (word2CharCount === undefined) {
                var missing_count = missing1_counts[word1CharCount];
                missing1_counts[word1CharCount]  = missing_count === undefined? 1: missing_count + 1;
                missing1_counter += word1CharCount;

            } else if (word1CharCount > word2CharCount) {
                var rem_count = word1CharCount - word2CharCount;
                missing_count = missing1_counts[rem_count];
                missing1_counts[rem_count] = missing_count === undefined? 1: missing_count + 1;
                missing1_counter += rem_count;
                delete chars2[char];

            } else if (word1CharCount < word2CharCount) {
                chars2[char] = word2CharCount - word1CharCount;

            } else {
                delete chars2[char];
            }
        }

        
        var word2Chars = Object.keys(chars2);
        var rem_chars = 0;
        for (j = 0 ; j < word2Chars.length; j++) {
            rem_chars += chars2[word2Chars[j]];
        }
        var diff = -1;
        if (rem_chars == missing1_counter) {
            diff = missing1_counter;
        }

        process.stdout.write(diff + "\n");
    }
};

if (require.main == module) {
    solution([10,
              'hhpddlnnsjfoyxpciioigvjqzfbpllssuj',
              'xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj',
              'dnqaurlplofnrtmh',
              'aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb',
              'lbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad',
              'drngbjuuhmwqwxrinxccsqxkpwygwcdbtriwaesjsobrntzaqbe',
              'ubulzt',
              'vxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy',
              'xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa',
              'gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv']);
}