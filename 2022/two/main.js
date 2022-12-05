const fs = require('fs');

const casesP1 = {
	AX: 4,
	AY: 8,
	AZ: 3,
	BX: 1,
	BY: 5,
	BZ: 9,
	CX: 7,
	CY: 2,
	CZ: 6,
};

const casesP2 = {
	AX: 3,
	AY: 4,
	AZ: 8,
	BX: 1,
	BY: 5,
	BZ: 9,
	CX: 2,
	CY: 6,
	CZ: 7,
};

fs.readFile('input.txt', (err, data) => {
	if (err) throw err;
	const rounds = data.toString().split('\n');

	const totalScoreP1 = rounds.reduce((total, str) => {
		const score = casesP1[str.replace(' ', '')];
		return total + score;
	}, 0);
	const totalScoreP2 = rounds.reduce((total, str) => {
		const score = casesP2[str.replace(' ', '')];
		return total + score;
	}, 0);
	console.log(totalScoreP2);
});
