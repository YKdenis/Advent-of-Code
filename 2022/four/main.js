const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;
	const pairs = data.toString().split('\n');
	const duplicatedEfforts = pairs.reduce((acc, pair) => {
		const ranges = [
			createRangeArray(pair.split(',')[0]),
			createRangeArray(pair.split(',')[1]),
		].sort((a, b) => b.length - a.length);
		// isRedundantPair(ranges) && acc++;
		isOverlappingPair(ranges) && acc++;
		return acc;
	}, 0);
	console.log(duplicatedEfforts);
});

const isRedundantPair = (ranges) =>
	ranges[1].every((sectionID) => ranges[0].includes(sectionID));

const isOverlappingPair = (ranges) =>
	ranges[1].find((sectionID) => ranges[0].includes(sectionID));

const createRangeArray = (sectionID) => {
	const rangeArray = [];
	const range = sectionID.split('-');
	for (let i = parseInt(range[0]); i < parseInt(range[1]) + 1; i++) {
		rangeArray.push(i);
	}
	return rangeArray;
};
