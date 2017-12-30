var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RoleSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    hierarchy_no: {type: Number, required: true, min:0, max: 100},
    description: {type: String, required: false, max: 1000},
  }
);

// Virtual for role's URL
RoleSchema
.virtual('url')
.get(function () {
  return '/roles/' + this._id;
});

//Export model
module.exports = mongoose.model('Role', RoleSchema);