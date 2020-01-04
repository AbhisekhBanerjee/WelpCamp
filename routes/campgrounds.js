//--------------------------CAMPGROUNDS ROUTES------------------------------------//
var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");   // by default it will take index.js

// INDEX route - show all the campgrounds
router.get("/", function(req, res){
  Campground.find({}, function(err, allCampgrounds){
    if (err){
      console.log("Error during DB find");
    } else{
      res.render("campgrounds/index", {campgrounds: allCampgrounds});
    }
  })
});

// CREATE - add a new campground to the DB
router.post("/", middleware.isLoggedIn, function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  };
  var newCampground = {name: name, image: image, description: desc, author: author};
  Campground.create(newCampground, function(err, newCampground){
    if (err){
      console.log("Error during DB find");
    } else{
      console.log(newCampground);
      res.redirect("/campgrounds");
    }
  })
});

// NEW - show a form to add a new campground 
router.get("/new", middleware.isLoggedIn, function(req, res){
  res.render("campgrounds/new");
}); 

// SHOW - show details of one campground
router.get("/:id", function(req, res){
  //find the campground with provided id 
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if (err){
      console.log(err);
    } else{
      //render the show template with that campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
});

//EDIT - Edit an existing campground
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
  Campground.findById(req.params.id, function(err, foundCampground){
      res.render("campgrounds/edit", {campground: foundCampground});
  });
});

//UPDATE - Update an existing campground 
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
  //find and update the correct campground
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
    if (err){
      res.redirect("/campgrounds");  
    } else{
      res.redirect("/campgrounds/" + req.params.id);
    }
  })
});

//DESTROY - destroy a campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
  Campground.findByIdAndDelete(req.params.id, function(err){
    if (err){
      res.redirect("/campgrounds");
    } else{
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;