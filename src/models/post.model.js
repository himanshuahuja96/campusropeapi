module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const post = new Schema(
    {
      createdBy: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      likesCount: {
        type: Number,
        default: 0
      },
      likes: [Object],
      commentsCount: {
        type: Number,
        default: 0
      },
      comments: [Object],
    },{
      timestamps: true,
      toJSON: {
        virtuals: true,
        transform: (obj, ret) => {
          delete ret._id;
        }
      }
    });

  return mongooseClient.model('post', post);
};

    