var express         = require("express");
var app             = express();
var request         = require("request");
var bodyparser      = require("body-parser");
var flash           = require("connect-flash");
var mongoose        = require("mongoose");
var passport        = require("passport");
var localStrategy   = require("passport-local");
var Campground      = require("./models/campground");
var Comment         = require("./models/comment");
var User            = require("./models/user");
var methodOverride  = require("method-override");
//var seedDB          = require("./seeds");
// requiring routes
var commentRoutes   = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes     = require("./routes/index");

//Connect Mongo DB
mongoose.connect("mongodb://localhost/welp_camp", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();  //seeding the database

// PASSPORT Configuration
//express-session configuration
app.use(require("express-session")({
  secret: "Hello hello, Can you hear me, as I scream your name!",
  resave: false,
  saveUninitialized: false
}));
// passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware for making user data available in every templates
app.use(function(req, res, next){
  res.locals.currentUser = req.user; 
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
	next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(3000, function(){
  console.log("The WelpCamp server has started!!!");
});

