const app = require('../../src/app');

describe('\'trending-news\' service', () => {
  it('registered the service', () => {
    const service = app.service('trending-news');
    expect(service).toBeTruthy();
  });
});
