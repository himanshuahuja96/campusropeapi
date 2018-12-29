const app = require('../../src/app');

describe('\'news-client\' service', () => {
  it('registered the service', () => {
    const service = app.service('news-client');
    expect(service).toBeTruthy();
  });
});
