toggl-got
=========

[![Travis](https://img.shields.io/travis/angusfretwell/toggl-got.svg)](https://travis-ci.org/angusfretwell/toggl-got)
[![Code Climate](https://img.shields.io/codeclimate/github/angusfretwell/toggl-got.svg)](https://codeclimate.com/github/angusfretwell/toggl-got)
[![Codecov](https://img.shields.io/codecov/c/github/angusfretwell/toggl-got.svg)](https://codecov.io/github/angusfretwell/toggl-got)
[![NPM Version](http://img.shields.io/npm/v/toggl-got.svg)](https://www.npmjs.org/package/toggl-got)
[![NPM Downloads](https://img.shields.io/npm/dm/toggl-got.svg)](https://www.npmjs.org/package/toggl-got)

Convenience wrapper for got to interact with the Toggl API

Install
-------

```
$ npm install --save toggl-got
```

Usage
-----

```js
import toggl from 'toggl-got';

toggl('me', { token: 'foo' }).then(res => {
	console.log(res.body.data.fullname);
	//=> 'Angus'
});
```

API
---

Same as [`got`](https://github.com/sindresorhus/got) (including the stream API and aliases), but with some additional options:

### token

Type: `string`

Toggl [API token](https://support.toggl.com/my-profile/#api).

Can be set globally with the `TOGGL_TOKEN` environment variable.

### endpoint

Type: `string`<br>
Default: `https://www.toggl.com/api/v8/`

Can be set globally with the `TOGGL_ENDPOINT` environment variable.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Angus Fretwell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
