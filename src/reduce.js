/**
 * Reduce.
 *
 * Applies the accumulator function iteratively on the
 * last return value of the accumulator and the current
 * value in the array. The initial last return value of the accumulator is the
 * initializer parameter.
 *
 * @param {Function} accumulator
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @param {any} initializer
 * @return {any}
 */
const reduce = (accumulator, a, i, j, initializer) => {
	if (i >= j) {
		return initializer;
	}

	for (; i < j; ++i) {
		initializer = accumulator(initializer, a[i]);
	}

	return initializer;
};

export default reduce;
