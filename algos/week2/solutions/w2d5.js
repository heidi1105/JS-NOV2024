// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg
// Sample interview question for Google : https://www.youtube.com/watch?v=XKu_SEDAykw

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;
// expected1 = [0, 2];
// Explanation: nums[0] + nums[2] = 2 + 7 = 9. Return order doesn't matter.

const nums2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
// expected2 = [2, 4];

// BONUS 
const nums3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
// expected3 = [1, 6];

/**
 * Finds the indexes of the nums that add up to the given target sum.Ano
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given nums
 *    that add up to the targetSum.
 */
function twoSum1(nums, targetSum) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === targetSum) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

function twoSum(nums, targetSum) {
    const result = [];
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const compNum = targetSum - nums[i]; // 9-2
        // check if the targetSum - currentNum exist in the key
        if(Object.hasOwn(map, compNum)){ // check if the map has compNum in the key
            return [map[compNum], i];
        }else{ // key does not exist, store it in map
            map[nums[i]] = i;
        }
    }
    return result;
}


console.log(twoSum(nums1,targetSum1));
console.log(twoSum(nums2, targetSum2));
console.log(twoSum(nums3, targetSum3));