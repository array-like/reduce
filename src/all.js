/**
 * All.
 *
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const all = (a, i, j) => {
	for (; i < j; ++i) {
		if (!a[i]) {
			return false;
		}
	}

	return true;
};

export default all;
