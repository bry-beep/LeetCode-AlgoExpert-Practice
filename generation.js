/* create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!". */

function generation(x, y) {
	const options = ['m', 'f'];
	if (!options.includes(y)) {
		throw 'invalid y value'
	}
  if (x === 0) {
		return 'me!';
	}
	let name = '';
	if (Math.abs(x) === 3) {
		name += 'great ';
	}
  if (Math.abs(x) > 1) {
		name += 'grand';
	}
  if (y === 'm') {
		name += x < 0 ? 'father' : 'son';
	} else if (y === 'f') {
		name += x < 0 ? 'mother' : 'daughter';
	}
	return name;
}

module.exports = generation;
