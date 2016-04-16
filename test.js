import 'should';
import getStream from 'get-stream';
import toggl from './source';

const token = process.env.TOGGL_TOKEN;

describe('toggl-got', () => {
  it('default', async () => {
    const res = await toggl('me');
    res.body.data.fullname.should.equal('Angus');
  });

  it('full path', async () => {
    const res = await toggl('https://www.toggl.com/api/v8/me');
    res.body.data.fullname.should.equal('Angus');
  });

  it('accepts options', async () => {
    const res = await toggl('me', {});
    res.body.data.fullname.should.equal('Angus');
  });

  it('global token option', async () => {
    process.env.TOGGL_TOKEN = 'fail';
    await toggl('me', {}).should.be.rejected();
    process.env.TOGGL_TOKEN = token;
  });

  it('token option', async () => {
    await toggl('me', { token: 'fail' }).should.be.rejected();
  });

  it('global endpoint option', async () => {
    process.env.TOGGL_ENDPOINT = 'fail';
    await toggl('me', { retries: 1 }).should.be.rejected();
    delete process.env.TOGGL_ENDPOINT;
  });

  it('endpoint option', async () => {
    process.env.TOGGL_ENDPOINT = 'https://www.toggl.com/api/v8/';
    await toggl('me', { endpoint: 'fail', retries: 1 }).should.be.rejected();
    delete process.env.TOGGL_ENDPOINT;
  });

  it('stream interface', async () => {
    const res = JSON.parse(await getStream(toggl.stream('me')));
    res.data.fullname.should.equal('Angus');
  });
});
