// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums = []) {
    if(nums.length <= 1){
        return nums; // exit the function
    }

    const mid = Math.floor(nums.length/2);
    let left = nums.slice(0, mid) 
    let right = nums.slice(mid)
    return merge(mergeSort(left), mergeSort(right))   
}

console.log(mergeSort(numsRandomOrder))
console.log(mergeSort(numsReversed))

function merge(left = [], right = []) {
    let i = 0
    let j = 0
    result = []

    while(i < left.length && j < right.length){ // both i & j are available, we can compare and push
        if(left[i] < right[j]){
            result.push(left[i])
            i++   
        }
        else{
            result.push(right[j])
            j++
        }
    }

    while(i< left.length){ // i has not reached the end (j ended)
        result.push(left[i]);
        i++; 
    }

    while(j<right.length){ // j has not reached the end (i ended)
        result.push(right[j]);
        j++;
    }
    return result
}