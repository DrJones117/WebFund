/* 
    Given an array and an index,
    remove the item at that index.
    return the removed item
    
    No built-in array methods except pop().
*/

const arr1a = ["a", "b", "c", "d", "e"];
const removeIdx1a = 1;
const expected1a = "b";
// after function call, arr1 should be:
const arr1Expecteda = ["a ","c", "d", "e"];

const arr2a = ["a", "b", "c"];
const removeIdx2a = 3;
const expected2a = null;
const arr2Expecteda = ["a", "b", "c"];

const arr3a = ["a", "b", "c"];
const removeIdx3a = -3;
const expected3a = null;
const arr3Expecteda = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */
function removeAt(items, idx) {
  // code here
    if (idx < 0 || idx > items.length - 1) {
        console.log(items);
        return null;
    }
    var itemValue = items[idx];
    for (var i = idx; i < items.length; i++) {
        items[i] = items[i + 1];
    }
    items.pop();
    console.log(items);
    return itemValue;
}

console.log(removeAt(arr1a, removeIdx1a));
console.log(removeAt(arr2a, removeIdx2a));
console.log(removeAt(arr3a, removeIdx3a));
/* 
    Given an array, move the minimum value to the front in-place
    return the array after done.

    No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

/**
 * Moves the smallest number in the given array to the front.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given arr after the min has been moved to front.
 */
function minToFront(nums) {
  // code here
    var minVal = nums[0];
    var minIdx = 0;
    for (var i = 1; i < nums.length - 1; i++) {
        if (nums[i] < minVal) {
            minVal = nums[i];
            minIdx = i;
        }
    }
    console.log(minVal);
    console.log(minIdx);
}

console.log(minToFront(nums1));

// didn't get too far with this one.
