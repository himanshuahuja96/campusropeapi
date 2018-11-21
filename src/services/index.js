const users = require('./users/users.service.js');
const ngo = require('./ngo/ngo.service.js');
const trendingNews = require('./trending-news/trending-news.service.js');
const constants = require('./constants/constants.service.js');
const adminTasks = require('./admin-tasks/admin-tasks.service.js');
const hepline = require('./hepline/hepline.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(ngo);
  app.configure(trendingNews);
  app.configure(constants);
  app.configure(adminTasks);
  app.configure(hepline);
};
