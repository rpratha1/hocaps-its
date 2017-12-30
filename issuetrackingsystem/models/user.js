var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: {type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    email_id: {type: String, required: true, max: 100},
    phone:{ type: Number, required: false, length: 10 },
    password: {type: String, required: true, max: 100},
    role: {type: Schema.ObjectId, ref: 'Role', required: true},
  }
);

// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/users/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);