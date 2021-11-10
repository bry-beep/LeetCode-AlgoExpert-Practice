/* all students wearing red must be in the same row, all students wearing blue must be in the same row, and each student in the back row must be strictly taller than the student directly in front of them. There are at most 2 rows of students and each class has at least 2 students. Write a function that returns whether or not a class photo can be taken. */

function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort();
	blueShirtHeights.sort();
	let tall;
	let short;
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		tall = redShirtHeights;
		short = blueShirtHeights;
	} else if (redShirtHeights[0] < blueShirtHeights[0]) {
		tall = blueShirtHeights;
		short = redShirtHeights;
	} else {
		return false;
	}
	for (let i = 0; i < tall.length; i++) {
		if (tall[i] < short[i]) {
			return false;
		}
	}
  return true;
}

module.exports = classPhotos;
