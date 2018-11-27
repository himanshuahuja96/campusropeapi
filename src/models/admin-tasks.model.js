// admin-tasks-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const admintasks = require('../services/admin-tasks/admin-tasks');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const adminTasks = new Schema({
    userId: {
      type: Schema.ObjectId,
      ref: 'User'
    },
    tasks: {
      type: Array,
      default: admintasks
    }
  },
  { timestamps: true });

  return mongooseClient.model('adminTasks', adminTasks);
};
