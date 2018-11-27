// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const users = new Schema({
  
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
    homeTown: {
      type: String,
      trim: true
    },
    currentCity: {
      type: String,
      trim: true
    },
    politicalView: {
      type: String,
      trim: true
    },
    religiousView: {
      type: String,
      trim: true
    },
    workAndExperience: {
      type: [String],
      trim: true
    },
    country: {
      type: String,
      trim: true
    },
    skills: {
      type: [String],
      trim: true
    },
    college: {
      type: String,
      trim: true
    },
    school: {
      type: String,
      trim: true
    },
    otherDegreeAndCourses: {
      type: [String],
      trim: true
    },
    careerObjectives: {
      type: [String],
      trim: true
    },
  
  
    googleId: { type: String },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};


