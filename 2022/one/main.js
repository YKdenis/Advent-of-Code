const fs = require('fs');

let totalCaloriesArr = [];

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;
	const allCaloriesArr = data.toString().split('\n');
	allCaloriesArr.reduce((total, value) => {
		if (value !== '') return total + parseInt(value);
		totalCaloriesArr.push(total);
		return 0;
	}, 0);
	const highestCalories = totalCaloriesArr
		.sort((prev, next) => next - prev)
		.slice(0, 3)
		.reduce((total, value) => total + value, 0);
	console.log(highestCalories);
});
