const app = require('../../src/app');

describe('\'ngo\' service', () => {
  it('registered the service', () => {
    const service = app.service('ngo');
    expect(service).toBeTruthy();
  });
});
