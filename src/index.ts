// src/index.ts

import { removeElement } from "./leetcode/27-remove-element";

let nums = [3, 2, 2, 3], val = 3;

const k = removeElement(nums, val);

console.log({ nums, k })