import test from 'ava';
import {all} from '#module';

const macro = (t, array, expected) => {
	t.is(all(array, 0, array.length), expected);
};

macro.title = (title, array, expected) =>
	title ?? `all(${JSON.stringify(array)}) is ${expected}`;

test(macro, [], true);
test(macro, [true], true);
test(macro, [false], false);

test(macro, [true, true, true, true], true);
test(macro, [false, false, false, false], false);

test(macro, [false, true, true, true], false);
test(macro, [true, false, true, true], false);
test(macro, [true, true, false, true], false);
test(macro, [true, true, true, false], false);

test(macro, [true, false, false, false], false);
test(macro, [false, true, false, false], false);
test(macro, [false, false, true, false], false);
test(macro, [false, false, false, true], false);
