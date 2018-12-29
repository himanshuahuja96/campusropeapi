// trending-news-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const trendingNews = new Schema({
    headline: {
      type: String
    },
    content: {
      type: String
    },
    state: {
      type: String
    },
    photo_urls: {
      type: [String],
      max: 4
    },
    cover_photo: {
      type: String
    },
    cover_video_url: {
      type: String
    },
    thumbnail_url: {
      type: String
    },
    youtube_link: {
      type: String
    },
    like_count: {
      type: String
    },
    likes: {
      type: [String]
    },
    newsClient:{
      type:String
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
  });

  return mongooseClient.model('trendingNews', trendingNews);
};
