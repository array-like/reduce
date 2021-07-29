/**
 * Any.
 *
 * @param {ArrayLike} a
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const any = (a, i, j) => {
	for (; i < j; ++i) {
		if (a[i]) {
			return true;
		}
	}

	return false;
};

export default any;
