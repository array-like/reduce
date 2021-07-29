import test from 'ava';
import {reduce} from '../../src/index.js';

const macro = (t, callable, array, init, expected) => {
	t.is(reduce(callable, array, 0, array.length, init), expected);
};

macro.title = (title, callable, array, init, expected) =>
	title ??
	`reduce(${callable.name}, ${JSON.stringify(array)}, ${init}) is ${expected}`;

const addpow2 = (x, y) => x + y * y;

test(macro, addpow2, [], 0, 0);
test(macro, addpow2, [1], 0, 1);
test(macro, addpow2, [1, 2, 3], 0, 14);
test(macro, addpow2, [1, 2, 3, 4, 5, 6], 0, 91);
test(macro, addpow2, [1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 285);
