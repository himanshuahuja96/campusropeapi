const app = require('../../src/app');

describe('\'hepline\' service', () => {
  it('registered the service', () => {
    const service = app.service('hepline');
    expect(service).toBeTruthy();
  });
});
