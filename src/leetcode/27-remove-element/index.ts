// src/leetcode/27-remove-element/index.ts
// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

export function removeElement(nums: number[], val: number): number {
    let filteredNums: number[] = [];
    nums.forEach((value) => {
        if (value !== val) {
            filteredNums.push(value);
        }
    })
    nums.splice(0, nums.length, ...filteredNums);
    return nums.length;
};