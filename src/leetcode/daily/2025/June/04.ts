// src/leetcode/daily/2025/June/04.ts
// https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/?envType=daily-question&envId=2025-06-04

// l = length, m = maxAnswerLength, a = answer, s = substring, e = end;
function answerString(word: string, numFriends: number): string {
    if (numFriends === 1) {
        return word;
    }
    const l = word.length;
    const m = l - numFriends + 1
    let a = "";
    for (let i = 0; i < l; i++) {
        const e = Math.min(i + m, l);
        const s = word.substring(i, e);
        if (s > a) {
            a = s;
        }
    }
    return a;
};

export default function main() {
    // test 1
    let word = "dbca", numFriends = 2;
    console.log("Answer string: ", answerString(word, numFriends)); // Expected "dbc"
    // test 2
    word = "gggg", numFriends = 4;
    console.log("Answer string: ", answerString(word, numFriends)); // Expected "g"
    // test 3
    word = "gh", numFriends = 1;
    console.log("Answer string: ", answerString(word, numFriends)); // Expected "gh"
    // test 4
    word = "bif", numFriends = 2;
    console.log("Answer string: ", answerString(word, numFriends)); // Expected "if"
    // test 5
    word = "aann", numFriends = 2;
    console.log("Answer string: ", answerString(word, numFriends)); // Expected "nn"
}

main();