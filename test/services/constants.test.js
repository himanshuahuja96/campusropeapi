const app = require('../../src/app');

describe('\'constants\' service', () => {
  it('registered the service', () => {
    const service = app.service('constants');
    expect(service).toBeTruthy();
  });
});
