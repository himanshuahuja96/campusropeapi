// ngo-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const NGO_TYPES = require('../services/constants/constants-data/ngo_types');
const STATUSES = require('../services/constants/constants-data/statuses');


module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const ngo = new Schema(
    {
      createdBy: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      ngoType: {
        type: String,
        enum: Object.values(NGO_TYPES),
        default: NGO_TYPES.TRUST
      },
      ngoSiteLink: {
        type: String
      },
      contactEmail: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        trim: true
      },
      documentLink: {
        type: String
      },
      operatingState: {
        type: String
      },
      noteToUser: {
        type: String
      },
      status: {
        type: String,
        enum: Object.values(STATUSES),
        default: STATUSES.PENDING
      }
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
        transform: (obj, ret) => {
          delete ret._id;
        }
      }
    }
  );

  return mongooseClient.model('ngo', ngo);
};
