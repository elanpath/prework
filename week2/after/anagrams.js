var add_new_group = function (str, group, groupChCount, result) {
    var newGid = result.length;
    var chCount = {};
    for (var i = 0; i < str.length; i++) {
        var ch = str[i];
        var currCount = chCount[ch];
        chCount[ch] = currCount === undefined? 1: currCount + 1;
        var gids = group[ch];
        if (gids === undefined) {
            group[ch] = [newGid];
        } else {
            var lastGid = group[ch][group[ch].length - 1];
            if (lastGid !== newGid) {
                group[ch].push(newGid);
            }
        }
    }
    groupChCount[newGid] = chCount;
};

var verifyChCount = function (str, poss_groups, strChCount, groupChCount) {
    var foundGid = undefined;
    var chars = Object.keys(strChCount);
    var found_gids = Object.keys(poss_groups);
    for (var j = 0; j < found_gids.length; j++) {
        var gid = found_gids[j];
        var checkCount = groupChCount[gid];

        var match = true;
        for (var i = 0; i < chars.length; i++) {
            var ch = chars[i];
            if (strChCount[ch] !== checkCount[ch]) {
                match = false;
                break;
            }
        }

        if (match === true) {
            foundGid = gid;
            break;
        }
    }

    return foundGid;
};

var get_possible_groups = function (ch, group, poss_groups) {
    var ch_groups = group[ch];

    if (poss_groups === undefined && ch_groups !== undefined) {
        poss_groups = {};
        ch_groups.forEach(function (gid) {
            poss_groups[gid] = 1;
        });
    } else if (ch_groups !== undefined) {
        var new_poss_groups = {};
        var found = false;
        ch_groups.forEach(function (gid) {
            if (poss_groups[gid] !== undefined) {
                found = true;
                new_poss_groups[gid] = 1;
            }
        });
        if (found === true) {
            poss_groups = new_poss_groups;
        } else {
            poss_groups = undefined;
        }
    }
    
    return poss_groups;
};

module.exports = { 
    //param A : array of strings
    //return a array of array of integers
    anagrams : function(A){
        var result = [];
        var group = {};
        var groupChCount = {};
        
        for (var i = 0; i < A.length; i++) {
            var str = A[i];
            var strChCount = {};
            var poss_groups = undefined;
            for (var j = 0; j < str.length; j++) {
                var ch = str[j];
                var currCount = strChCount[ch];
                strChCount[ch] = currCount === undefined? 1: currCount + 1;
                poss_groups = get_possible_groups(ch, group, poss_groups);
                if (poss_groups === undefined) {
                    break;
                }
            }
            
            if (poss_groups === undefined) {
                add_new_group(str, group, groupChCount, result);
                result[result.length] = [i + 1];
            } else {
                var found_gid = verifyChCount(str, poss_groups, strChCount, groupChCount);
                if (found_gid !== undefined) {
                    result[found_gid].push(i + 1);
                } else {
                    add_new_group(str, group, groupChCount, result);
                    result[result.length] = [i + 1];
                }
            }
        }
        
        return result;
    }
};


if (require.main == module) {
    var test = module.exports;
    // result: [ [ 1 ], [ 2 ], [ 3, 5 ], [ 4 ], [ 6 ], [ 7 ], [ 8 ] ]
    console.log(test.anagrams(["abbbaabbbabbbbabababbbbbbbaabaaabbaaababbabbabbaababbbaaabbabaabbaabbabbbbbababbbababbbbaabababba", "abaaabbbabaaabbbbabaabbabaaaababbbbabbbaaaabaababbbbaaaabbbaaaabaabbaaabbaabaaabbabbaaaababbabbaa", "babbabbaaabbbbabaaaabaabaabbbabaabaaabbbbbbabbabababbbabaabaabbaabaabaabbaabbbabaabbbabaaaabbbbab", "bbbabaaabaaaaabaabaaaaaaabbabaaaabbababbabbabbaabbabaaabaabbbabbaabaabaabaaaabbabbabaaababbaababb", "abbbbbbbbbbbbabaabbbbabababaabaabbbababbabbabaaaabaabbabbaaabbaaaabbaabbbbbaaaabaaaaababababaabab", "aabbbbaaabbaabbbbabbbbbaabbababbbbababbbabaabbbbbbababaaaabbbabaabbbbabbbababbbaaabbabaaaabaaaaba", "abbaaababbbabbbbabababbbababbbaaaaabbbbbbaaaabbaaabbbbbbabbabbabbaabbbbaabaabbababbbaabbbaababbaa", "aabaaabaaaaaabbbbaabbabaaaabbaababaaabbabbaaaaababaaabaabbbabbababaabababbaabaababbaabbabbbaaabbb"]));
}
