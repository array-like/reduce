/**
 * Sum.
 *
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @param {number|bigint} zero
 * @return {number|bigint}
 */
const sum = (a, i, j, zero = 0) => {
	if (i >= j) {
		return zero;
	}

	let total = a[i];

	for (++i; i < j; ++i) {
		total += a[i];
	}

	return total;
};

export default sum;
