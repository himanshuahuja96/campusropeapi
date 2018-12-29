// news-client-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const newsClient = new Schema({
    name: { type: String, required: true },
    logourl: { type: String, required: true },
  }, {
    timestamps: true
  });

  return mongooseClient.model('newsClient', newsClient);
};
