const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;
	const pairs = data.toString().split('\n');
	pairs.reduce((amountOfPairs, pair) => {
		const ranges = [
			createRangeArray(splitPair(pair)[0]),
			createRangeArray(splitPair(pair)[1]),
		];
		console.log(ranges);
	});
});

const getHighestSectionRange = (pair) => {
	const sections = [
		getSectionRange(splitPair(pair)[0]),
		getSectionRange(splitPair(pair)[1]),
	];
	return Number(sections[0] > sections[1]);
};

const splitPair = (pair) => pair.split(',');

const getSectionRange = (section) =>
	parseInt(section.split('-')[1]) - parseInt(section.split('-')[0]);

const createRangeArray = (section) => {
	const rangeArray = [];
	const range = section.split('-');
	for (let i = parseInt(range[0]); i < parseInt(range[1]) + 1; i++) {
		rangeArray.push(i);
	}
	return rangeArray;
};
