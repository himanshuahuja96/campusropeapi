// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const roles = ['user', 'admin'];
  const users = new Schema({
  
    email: {type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true},
    password: { type: String },
    homeTown: {
      type: String,
      trim: true,
      default:'',
    },
    currentCity: {
      type: String,
      trim: true,
      default:''
    },
    politicalView: {
      type: String,
      trim: true,
      default:''
    },
    religiousView: {
      type: String,
      trim: true,
      default:''
    },
    workAndExperience: {
      type: [String],
      trim: true,
      default:[]
    },
    country: {
      type: String,
      trim: true,
      default:''
    },
    skills: {
      type: [String],
      trim: true,
      default:[]
    },
    college: {
      type: String,
      trim: true,
      default:[]
    },
    school: {
      type: String,
      trim: true,
      default:''
    },
    otherDegreeAndCourses: {
      type: [String],
      trim: true,
      default:[]
    },
    careerObjectives: {
      type: [String],
      trim: true,
      default:[]
    },
    gender: {
      type: String,
      default: 'male'
    },
    name: {
      type: String,
      index: true,
      trim: true
    },
    services: {
      google: String
    },
    role: {
      type: String,
      enum: roles,
      default: 'user'
    },
    picture: {
      type: String,
      trim: true
    },
  
    googleId: { type: String },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};


