var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var IssueTypeSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    description: {type: String, required: false, max: 1000},
  }
);

// Virtual for issuetype's URL
IssueTypeSchema
.virtual('url')
.get(function () {
  return '/issueType/' + this._id;
});

//Export model
module.exports = mongoose.model('IssueType', IssueTypeSchema);