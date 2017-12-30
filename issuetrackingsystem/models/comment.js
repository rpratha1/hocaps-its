var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
    posted_by: {type: Schema.ObjectId, ref: 'User', required: true},
    on_issue: {type: Schema.ObjectId, ref: 'Issue', required: true},
    description: {type: String, required: true, max: 1000},
  }
);

// Virtual for comment's URL
CommentSchema
.virtual('url')
.get(function () {
  return 'comments/' + this._id;
});

//Export model
module.exports = mongoose.model('Comment', CommentSchema);