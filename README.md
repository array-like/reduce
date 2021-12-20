:bowl_with_spoon: [@array-like/reduce](https://array-like.github.io/reduce)
==

ArrayLike reducers for JavaScript.
See [docs](https://array-like.github.io/reduce/index.html).

```js
import {shuffle} from '@randomized/random';
import {_calloc} from '@array-like/alloc'
import {iota} from '@array-like/fill';
import {max} from '@array-like/reduce';
import {increasing} from '@total-order/primitive';

const calloc = _calloc(Int32Array);
const n = 100;
const a = calloc(n);
iota(a, 0, n, 0);
shuffle(a, 0, n);
max(increasing, a, 0, n); // 99
```

[![License](https://img.shields.io/github/license/array-like/reduce.svg)](https://raw.githubusercontent.com/array-like/reduce/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@array-like/reduce.svg)](https://www.npmjs.org/package/@array-like/reduce)
[![Tests](https://img.shields.io/github/workflow/status/array-like/reduce/ci:test?event=push&label=tests)](https://github.com/array-like/reduce/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/array-like/reduce.svg)](https://github.com/array-like/reduce/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/array-like/reduce.svg)](https://github.com/array-like/reduce/issues)
[![Downloads](https://img.shields.io/npm/dm/@array-like/reduce.svg)](https://www.npmjs.org/package/@array-like/reduce)

[![Code issues](https://img.shields.io/codeclimate/issues/array-like/reduce.svg)](https://codeclimate.com/github/array-like/reduce/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/array-like/reduce.svg)](https://codeclimate.com/github/array-like/reduce/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/array-like/reduce/main.svg)](https://codecov.io/gh/array-like/reduce)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/array-like/reduce.svg)](https://codeclimate.com/github/array-like/reduce/trends/technical_debt)
[![Documentation](https://array-like.github.io/reduce/badge.svg)](https://array-like.github.io/reduce/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@array-like/reduce)](https://bundlephobia.com/result?p=@array-like/reduce)
