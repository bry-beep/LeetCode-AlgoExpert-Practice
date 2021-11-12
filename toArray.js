/* write a function that converts an object into an array, where each element represents a key-value pair in the form of an array. */

function toArray(obj) {
	//return Object.entries(obj);
	let arr = [];
	Object.keys(obj).forEach(key => {
		arr.push([key, obj[key]]);
	})
	return arr;
}

module.exports = toArray;
