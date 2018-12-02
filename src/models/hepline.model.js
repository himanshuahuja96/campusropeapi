// hepline-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const hepline = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    operatingState:{type:String},
    websiteLink:{type:String},
    linkToFileComplaint:{type:String},
    helplineNumber:{type:String},
    createdBy: {
      type: Schema.ObjectId,
      ref: 'User'
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('hepline', hepline);
};
