// src/leetcode/daily/2025/June/04.ts
// https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/?envType=daily-question&envId=2025-06-04

function answerString(word: string, numFriends: number): string {
    if (numFriends === 1) {
        return word;
    }
    const length = word.length;
    const maxAnswerLength = length - numFriends + 1
    let answer = "";
    for (let i = 0; i < length; i++) {
        const end = Math.min(i + maxAnswerLength, length);
        const substring = word.substring(i, end);
        if (substring > answer) {
            answer = substring;
        }
    }
    return answer;
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