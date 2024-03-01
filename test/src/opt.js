import test from 'ava';

import {_calloc} from '@array-like/alloc';
import {
	increasing as _increasing,
	decreasing as _decreasing,
} from '@total-order/primitive';
import {randint} from '@randomized/random';
import {contains} from '@functional-abstraction/operator';

import {min, max, argmin, argmax} from '#module';

const macro = (t, type, compare) => {
	const calloc = _calloc(type);

	const n = 100;

	const a = calloc(n);

	for (let i = 0; i < n; ++i) {
		a[i] = randint(0, 2 ** 31);
	}

	const minValue = min(compare, a, 0, n);
	const maxValue = max(compare, a, 0, n);
	const minIndex = argmin(compare, a, 0, n);
	const maxIndex = argmax(compare, a, 0, n);

	t.true(contains(a, minValue), 'array contains min');
	t.true(contains(a, maxValue), 'array contains max');
	t.true(minIndex >= 0 && minIndex < n, 'array contains argmin');
	t.true(maxIndex >= 0 && maxIndex < n, 'array contains argmax');

	t.is(a[minIndex], minValue, 'argmin is min');
	t.is(a[maxIndex], maxValue, 'argmax is max');

	for (let i = 0; i < n; ++i) {
		t.true(compare(minValue, a[i]) <= 0, `${minValue} <= ${a[i]}`);
		t.true(compare(maxValue, a[i]) >= 0, `${maxValue} >= ${a[i]}`);
	}

	t.is(
		min(compare, a, 0, 0),
		undefined,
		'min on empty array returns undefined',
	);
	t.is(
		max(compare, a, 0, 0),
		undefined,
		'max on empty array returns undefined',
	);
	t.is(
		argmin(compare, a, 0, 0),
		undefined,
		'argmin on empty array returns undefined',
	);
	t.is(
		argmax(compare, a, 0, 0),
		undefined,
		'argmax on empty array returns undefined',
	);
};

macro.title = (title, type, compare) =>
	title ?? `opt (${type.name}, ${compare.name})`;

const types = [
	Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
	Uint8ClampedArray,
	Float32Array,
	Float64Array,
];

const increasing = (a, b) => _increasing(a, b);
const decreasing = (a, b) => _decreasing(a, b);

const predicates = [increasing, decreasing];

for (const type of types) {
	for (const compare of predicates) {
		test(macro, type, compare);
	}
}
