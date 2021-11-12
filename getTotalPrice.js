/* create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price. */

function getTotalPrice(groceries) {
	let total = 0.0;
	groceries.forEach(grocery => {
		total = Math.round((total + grocery.price*grocery.quantity)*100) / 100;
	})
	return total;
}

module.exports = getTotalPrice;
