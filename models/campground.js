var mongoose = require("mongoose");

// Campground Schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  author: {
    id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
    },
    username: String
  },
  // object referencing
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"    // name of the model
    }
  ]
});

//Build the model based on above schema
var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;