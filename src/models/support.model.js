module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const suport = new Schema({
    question: { type: String, required: true },
    answer: { type: String },
    createdBy: {
      type: Schema.ObjectId,
      ref: 'User'
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('suport', suport);
};
