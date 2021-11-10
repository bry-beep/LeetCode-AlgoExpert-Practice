/* given 2 non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one. */

function isValidSubsequence(array, sequence) {
	let test = 0;
  for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[test]) {
			test++;
		}
	}
	return test === sequence.length ? true : false;
}

module.exports = isValidSubsequence;
