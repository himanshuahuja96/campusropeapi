const app = require('../../src/app');

describe('\'admin-tasks\' service', () => {
  it('registered the service', () => {
    const service = app.service('admin-tasks');
    expect(service).toBeTruthy();
  });
});
