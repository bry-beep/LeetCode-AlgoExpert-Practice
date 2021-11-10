/* write a function that takes in a non-empty array of distinct integers anad an integer representing a target sum. If any 2 numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no 2 numbers sum up to the target sum, the function should return an empty array. */

//solution 1
// function twoNumberSum0(array, targetSum) {
// 	if (array.length < 2) {
// 		return [];
// 	}
// 	const first = array[0];
//   for (let i = 1; i < array.length; i ++) {
// 		if (first + array[i] === targetSum) {
// 			return [first, array[i]];
// 		}
// 	}
// 	return twoNumberSum0(array.slice(1), targetSum);
// }

//solution 2
function twoNumberSum(array, targetSum) {
  let store = {};
	for (let i = 0; i < array.length; i++) {
		let pair = targetSum - array[i];
		if (store[pair]) {
			return [pair, array[i]];
		} else {
			store[array[i]] = true;
		}
	}
	return [];
}

module.exports = twoNumberSum;
