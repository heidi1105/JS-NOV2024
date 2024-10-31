// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums4 = [2, 5, 3, 6, 7, 23, 12];
const sum4 = 16;
const expected4 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

const nums5 = [];
const sum5 = 5;
const expected5 = [];

const nums6 = [10, 15, 20, 35, 30];
const sum6 = 5;
const expected6 = [];

// Bonus （include 0):
const nums7 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum7 = 16;
const expected7 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus (include negative numbers):
const nums8 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum8 = -16;
const expected8 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */

function findConsqSums(nums, targetSum) {
    const result = []

    for(let i = 0; i < nums.length; i++){
        let arr = []
        let sum = 0
        for(let j = i; j < nums.length; j++){
            arr.push(nums[j])
            sum += nums[j]
            if(sum === targetSum){
                result.push([...arr]) // push a different arr than the original arr
            }
        }
    }
    return result
}

// [2, 5, 3, 6, 7, 23, 12];


console.log(findConsqSums(nums4, sum4))
console.log(findConsqSums(nums5, sum5))
console.log(findConsqSums(nums6, sum6))
console.log(findConsqSums(nums7, sum7))