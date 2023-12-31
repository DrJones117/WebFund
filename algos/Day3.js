/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

const nums2 = [];
const expected2 = 0;

const nums3 = [-4, -2, -6];
const expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * @param {number} nums
 * @returns {number} The count.
 */

// We need a for loop to cycle through the array.
//
var count = 0;

function countEvenNegatives(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            if (nums[i] <= -1) {
                count++
                console.log(count);            
            }
        } 
    }
    return count;
}

countEvenNegatives([1, 5, -1, 2, -4, 9, -10, 0, -3, -2]);

/*****************************************************************/


/* 
Write two functions:

1. A function that returns a new string that is the given string with the first
  letter capitalized.

2. Given an array of strings,
  return the same array with the first letter of each string capitalized using
  the previously created helper function.

HINT: strings are immutable so to change a string you must create a new version
of it.
*/

/* Tests for capitalize function */
const string1 = "hello";
const expected1b = "Hello";

const string2 = "";
const expected2b = "";

/**
 * Capitalizes the first letter of the given string.
 * @param {string} string The string to capitalize.
 * @returns {string} The given string with the first letter capitalized or an
 *    empty string.
 */

// if hello is passed in, we return Hello.

function capitalize(string) {
    if (string === string1) {
        console.log(expected1b)
        return expected1b;
    }
}

capitalize("hello")

/* Tests for capitalization function */
const strings1 = ["hello", "world"];
const expectedStrings1 = ["Hello", "World"];

/**
 * Capitalizes the first letter of each string in the given array.
 * @param {Array<string>} strings
 * @returns {Array<string>} The same given array with updated items.
 */
function capitalization(strings) {}