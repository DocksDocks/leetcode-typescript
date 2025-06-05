// src/leetcode/26-remove-duplicates-array/index.ts
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
function removeDuplicates(nums: number[]): number {
    let t: number[] = [];
    nums.forEach(n => {
        const hasValue = t.includes(n);
        if (!hasValue) {
            t.push(n)
        }
    })
    nums.splice(0, nums.length, ...t)
    return nums.length
};

export default function main() {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    removeDuplicates(nums);
    console.log({ nums })
}

main()