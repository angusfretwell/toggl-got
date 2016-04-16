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

- **`token`**

	Toggl [API token](https://support.toggl.com/my-profile/#api).

	Can be set globally with the `TOGGL_TOKEN` environment variable.

- **`endpoint`**

	Default: `https://www.toggl.com/api/v8/`

	Can be set globally with the `TOGGL_ENDPOINT` environment variable.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Angus Fretwell
