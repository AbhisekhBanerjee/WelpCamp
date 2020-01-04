var mongoose = require("mongoose");

// Campground Schema setup
var commentSchema = new mongoose.Schema({
  text: String,
  author: {
    id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
    },
    username: String
  }
});

//Build the model based on above schema
var Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;