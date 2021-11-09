/* write a function that takes in a non-empty array of distinct integers anad an integer representing a target sum. If any 2 numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no 2 numbers sum up to the target sum, the function should return an empty array. */

//solution 1
function twoNumberSum(array, targetSum) {
	if (array.length < 2) {
		return [];
	}
	const first = array[0];
  for (let i = 1; i < array.length; i ++) {
		if (first + array[i] === targetSum) {
			return [first, array[i]];
		}
	}
	return twoNumberSum(array.slice(1), targetSum);
}

module.exports = twoNumberSum;
