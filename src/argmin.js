/**
 * Argmin.
 *
 * @param {Function} compare
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const argmin = (compare, a, i, j) => {
	if (i >= j) {
		return undefined;
	}

	let argminSoFar = i;
	let minSoFar = a[argminSoFar];

	for (++i; i < j; ++i) {
		const candidate = a[i];

		if (compare(candidate, minSoFar) < 0) {
			argminSoFar = i;
			minSoFar = candidate;
		}
	}

	return argminSoFar;
};

export default argmin;
