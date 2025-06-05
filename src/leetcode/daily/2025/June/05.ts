// src/leetcode/daily/2025/June/05.ts
// https://leetcode.com/problems/lexicographically-smallest-equivalent-string/description/?envType=daily-question&envId=2025-06-05

function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const parent: number[] = Array.from({ length: 26 }, (_, i) => i);
    const find = (i: number): number => {
        if (parent[i] === i) return i;
        parent[i] = find(parent[i])
        return find(parent[i]);
    };
    const union = (i: number, j: number): void => {
        const repI = find(i);
        const repJ = find(j);
        if (repI < repJ) {
            parent[repJ] = repI;
        } else {
            parent[repI] = repJ;
        }
    };
    for (let i = 0; i < s1.length; i++) {
        const index1 = s1.charCodeAt(i) - 97;
        const index2 = s2.charCodeAt(i) - 97;
        union(index1, index2);
    }
    let result = "";
    for (let i = 0; i < baseStr.length; i++) {
        const charIndex = baseStr.charCodeAt(i) - 97;
        const representativeIndex = find(charIndex);
        result += String.fromCharCode(representativeIndex + 97);
    }
    return result;
};
export default function main() {
    // test 1
    let s1 = "parker", s2 = "morris", baseStr = "parser";
    console.log(smallestEquivalentString(s1, s2, baseStr)); // expected "makkek"
}

main();