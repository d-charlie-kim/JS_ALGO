let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

let numSize = 0;
for (let i = 1; i < input.length; i++) {
	numSize = parseInt(input[i])
	i++;
	if (i < input.length) {
		let temp = (input[i]).split(" ");
		console.log(Math.min(...temp), Math.max(...temp));
	}
}
