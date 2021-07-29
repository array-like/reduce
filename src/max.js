/**
 * Max.
 *
 * @param {Function} compare
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @return {any}
 */
const max = (compare, a, i, j) => {
	if (i >= j) {
		return undefined;
	}

	let maxSoFar = a[i];

	for (++i; i < j; ++i) {
		const candidate = a[i];

		if (compare(candidate, maxSoFar) > 0) {
			maxSoFar = candidate;
		}
	}

	return maxSoFar;
};

export default max;
