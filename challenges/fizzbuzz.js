// Write a function that returns an array containing the numbers 1 to num. 
// Put "fizz" in place of numbers divisble by 3, 
// "buzz" in place of numbers divisble by 5, 
// and "fizzbuzz" in place of numbers divisble by both 3 and 5

function fizzbuzz(num) {
	output = [];
	for (let i = 1; i <= num; i++) {
		if (i % 15 === 0) { output.push('fizzbuzz') }
		else if (i % 3 === 0) { output.push('fizz') }
		else if (i % 5 === 0) { output.push('buzz') }
		else { output.push(i) }
	}
	return output;
}

module.exports = fizzbuzz;
