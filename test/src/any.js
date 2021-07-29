import test from 'ava';
import {any} from '../../src/index.js';

const macro = (t, array, expected) => {
	t.is(any(array, 0, array.length), expected);
};

macro.title = (title, array, expected) =>
	title ?? `any(${JSON.stringify(array)}) is ${expected}`;

test(macro, [], false);
test(macro, [true], true);
test(macro, [false], false);

test(macro, [true, true, true, true], true);
test(macro, [false, false, false, false], false);

test(macro, [false, true, true, true], true);
test(macro, [true, false, true, true], true);
test(macro, [true, true, false, true], true);
test(macro, [true, true, true, false], true);

test(macro, [true, false, false, false], true);
test(macro, [false, true, false, false], true);
test(macro, [false, false, true, false], true);
test(macro, [false, false, false, true], true);
