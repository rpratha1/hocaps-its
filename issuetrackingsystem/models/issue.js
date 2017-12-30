var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IssueSchema = new Schema(
  {
    summary: {type: String, required: true, max: 1000},
    description: {type: String, required: false, max: 2000},
    created_by: {type: Schema.ObjectId, ref: 'User', required: true},
    created_on: {type: Date},
    assigned_to: {type: Schema.ObjectId, ref: 'User', required: true},
    status: {type: String, required: true, max: 100},
    priority: {type: String, required: true, max: 100},
    modified_on: {type: Date},
    issue_type: {type: Schema.ObjectId, ref: 'IssueType', required: true},
  }
);

// Virtual for issue's URL
IssueSchema
.virtual('url')
.get(function () {
  return '/issues/' + this._id;
});

//Export model
module.exports = mongoose.model('Issue', IssueSchema);