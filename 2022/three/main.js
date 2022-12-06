const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;
	const rugsacks = data.toString().split('\n');
	const SumOfPrioritiesP1 = calcPrioByCompartments(rugsacks);
	const SumOfPrioritiesP2 = calcPrioByGroup(rugsacks);
	console.log(SumOfPrioritiesP1, SumOfPrioritiesP2);
});

const calcPrioByCompartments = (rugsacks) =>
	rugsacks
		.map((rugsack) => {
			const compartments = [
				rugsack.split('').slice(0, rugsack.length / 2),
				rugsack.split('').slice(-rugsack.length / 2),
			];
			const duplicateChar = compartments[0].filter(
				(char) => compartments[1].indexOf(char) >= 0
			)[0];
			return calcPrioOfChar(duplicateChar);
		})
		.reduce((total, value) => total + value, 0);

const calcPrioByGroup = (rugsacks) => {
	let priority = 0;
	for (let i = 0; i < rugsacks.length; i += 3) {
		const group = rugsacks.slice(i, i + 3);
		const badge = group
			.join('')
			.split('')
			.filter(
				(char) =>
					group[0].includes(char) &&
					group[1].includes(char) &&
					group[2].includes(char)
			)[0];
		priority += calcPrioOfChar(badge);
	}
	return priority;
};

const calcPrioOfChar = (char) =>
	'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		.split('')
		.indexOf(char) + 1;
