import test from 'ava';
import {sum} from '../../src/index.js';

const macro = (t, array, expected) => {
	t.is(sum(array, 0, array.length), expected);
};

macro.title = (title, array, expected) =>
	title ?? `sum(${JSON.stringify(array)}) is ${expected}`;

test(macro, [], 0);
test(macro, [1], 1);
test(macro, [1, 2, 3], (3 * 4) / 2);
test(macro, [1, 2, 3, 4, 5, 6], (6 * 7) / 2);
test(macro, [1, 2, 3, 4, 5, 6, 7, 8, 9], (9 * 10) / 2);
