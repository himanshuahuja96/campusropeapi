const app = require('../../src/app');

describe('\'helpline\' service', () => {
  it('registered the service', () => {
    const service = app.service('helpline');
    expect(service).toBeTruthy();
  });
});
