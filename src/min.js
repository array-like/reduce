/**
 * Min.
 *
 * @param {Function} compare
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @return {any}
 */
const min = (compare, a, i, j) => {
	if (i >= j) {
		return undefined;
	}

	let minSoFar = a[i];

	for (++i; i < j; ++i) {
		const candidate = a[i];

		if (compare(candidate, minSoFar) < 0) {
			minSoFar = candidate;
		}
	}

	return minSoFar;
};

export default min;
