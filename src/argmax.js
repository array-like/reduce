/**
 * Argmax.
 *
 * @param {Function} compare
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const argmax = (compare, a, i, j) => {
	if (i >= j) {
		return undefined;
	}

	let argmaxSoFar = i;
	let maxSoFar = a[argmaxSoFar];

	for (++i; i < j; ++i) {
		const candidate = a[i];

		if (compare(candidate, maxSoFar) > 0) {
			argmaxSoFar = i;
			maxSoFar = candidate;
		}
	}

	return argmaxSoFar;
};

export default argmax;
