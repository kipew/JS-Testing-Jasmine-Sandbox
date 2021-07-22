function sum(a, b) {
	if (typeof a === 'string' && typeof b === 'string') {
		return `Result: ${a} ${b}`;
	}

	if (typeof a === 'object' || typeof b === 'object') {
		throw new Error(`Can't sub objects`);
	}

	return a + b;
}

module.exports = sum;