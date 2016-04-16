import got from 'got';

function toggl(path, opts) {
  if (typeof path !== 'string') {
    return Promise.reject(new TypeError(`Expected 'path' to be a string, got ${typeof path}`));
  }

  const env = process.env;
  const token = new Buffer(`${env.TOGGL_TOKEN}:api_token`).toString('base64');

  opts = Object.assign({
    token,
    json: true,
    endpoint: env.TOGGL_ENDPOINT
      ? env.TOGGL_ENDPOINT.replace(/[^/]$/, '$&/')
      : 'https://www.toggl.com/api/v8/',
  }, opts);

  opts.headers = Object.assign({
    accept: 'application/json',
  }, opts.headers);

  if (opts.token) {
    opts.headers.authorization = `Basic ${opts.token}`;
  }

  const url = /https?/.test(path) ? path : opts.endpoint + path;

  if (opts.stream) {
    return got.stream(url, opts);
  }

  return got(url, opts);
}

const helpers = [
  'get',
  'post',
  'put',
  'patch',
  'head',
  'delete',
];

toggl.stream = (url, opts) => toggl(url, Object.assign({}, opts, { json: false, stream: true }));

for (const x of helpers) {
  const method = x.toUpperCase();
  toggl[x] = (url, opts) => toggl(url, Object.assign({}, opts, { method }));
  toggl.stream[x] = (url, opts) => toggl.stream(url, Object.assign({}, opts, { method }));
}

export default toggl;
