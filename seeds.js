var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

//Add campgrounds data to the DB using the above model
// var campgrounds = [
//   {name: "Rashawn Oval creek", image: "/camping1.jpg", 
//    description: "This is a great campground with unreal natural view, you'll love it!"},
//   {name: "Paucek Square creek", image: "/camping2.jpg",
//    description: "This is a great campground with unreal natural view, you'll love it!"},
//   {name: "Nicolas Terrace creek", image: "/camping3.jpg",
//    description: "This is a great campground with unreal natural view, you'll love it!"},
//   {name: "Burdette Drives creek", image: "/camping4.jpg",
//    description: "This is a great campground with unreal natural view, you'll love it!"},
//   {name: "Herzog Rapids creek", image: "/camping5.jpg",
//    description: "This is a great campground with unreal natural view, you'll love it!"},
//   {name: "Marcus Extension creek", image: "/camping6.jpg",
//    description: "This is a great campground with unreal natural view, you'll love it!"}
// ];

var data = [
  {
      name: "Cloud's Rest", 
      image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
      name: "Desert Mesa", 
      image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
      name: "Canyon Floor", 
      image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
];

// some more pictures

// https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg
// https://farm1.staticflickr.com/189/493046463_841a18169e.jpg
// https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg
// https://images.freeimages.com/images/large-previews/e4c/camping-tent-1058140.jpg
// https://images.freeimages.com/images/large-previews/4d3/base-camp-1-1393497.jpg
// https://images.freeimages.com/images/large-previews/92b/medieval-tents-1202280.jpg
// https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80

// https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80

function seedDB(){
  // remove all campgrounds
  Campground.remove({}, function(err){
    if (err){
      console.log(err);
    }
    // console.log("Removed all campgrounds!");
    // Comment.remove({}, function(err) {
    //   if(err){
    //       console.log(err);
    //   }
    //   console.log("removed comments!");
    //   //add a few default campgrounds
    //   data.forEach(function(seed){
    //     Campground.create(seed, function(err, campground){
    //       if (err){
    //         console.log(err);
    //       }
    //       else{
    //         console.log("added a campground!");
    //         //create a comment
    //         Comment.create(
    //           {
    //               text: "This place is great, but I wish there was internet",
    //               author: "Homer"
    //           }, function(err, comment){
    //               if(err){
    //                   console.log(err);
    //               } else {
    //                   campground.comments.push(comment);
    //                   campground.save();
    //                   console.log("Created new comment");
    //               }
    //         });
    //       }
    //     });
    //   });
    // });
  });   
}

module.exports = seedDB;