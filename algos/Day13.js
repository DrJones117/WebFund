/*
    Input: Two arrays of equal length containing integers
    Output: A new array where each item is the sum of
    the items in arr1 and arr2 at that same index
 */

    var numbersA1 = [20, 10, 30];
    var numbersB1 = [10, 30, 20];
    var expected1 = [30, 40, 50];
    
    /**
   * Returns a new array that is the sum of the columns of the two given arrays
   * of equal lengths.
   * @param {Array<number>} nums1
   * @param {Array<number>} nums2
   * @returns {Array<number>} The column sums.
   */

// make a list vvariable
// we ned a for loop to cycle through each array
// pull the number of each index and add them together
// store them in a new array

    function sumArrColumns(nums1, nums2) {
      // code here
        var results = [];
        for (var i = 0; i < nums1.length; i++) {
            var sums = nums1[i] + nums2[i];
            results.push(sums);
        }
        return results;
    }

    console.log(sumArrColumns(numbersA1, numbersB1));

    /*****************************************************************************/

    /* 
    https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

    Given an array, rotate the array in place to the right by "k" steps, where "k" is
    non-negative.

    BONUS: The given array must be mutated, do not return a new array.
  */

    const nums1 = [1, 2, 3, 4, 5, 6, 7];
    const k1 = 3;
    const expected1 = [5, 6, 7, 1, 2, 3, 4];
    /* Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
  */

    const nums2 = [-1, -100, 3, 99];
    const k2 = 2;
    const expected2 = [3, 99, -1, -100];
    /* Explanation:
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
  */

    const nums3 = [1, 2, 3, 4];
    const k3 = 4;
    const expected3 = [1, 2, 3, 4];
    /* Explanation: 
    After 4 rotations it is back to it's starting point.
  */

    const nums4 = [1, 2];
    const k4 = 5;
    const expected4 = [2, 1];
    /* 
    Explanation: After 2 rotations the array is back to it's original order.
    After 4 rotations it is back to it's original order again.
    1 more rotation makes 5.
  */

    /**
   * Rotates the array items to the right "k" times.
   * @param {Array<number>} nums The numbers to be rotated.
   * @param {number} k The amount of times to rotate the last item to the front.
   * @returns {Array<number>} The given array after being rotated.
   */

    function rotate(nums, k) { 
        var j = 0;
        while (j < k) {
            var rItem = nums[nums.length - 1];
            for (var i = nums.length - 1; i > 0 - 1; i--) {
                nums[i] = nums[i - 1];
            }
            nums[0] = rItem;
            j++;
        }
        return nums;
    }

    console.log(rotate(nums1, k1));
    console.log(rotate(nums2, k2));
    console.log(rotate(nums3, k3));
    console.log(rotate(nums4, k4));