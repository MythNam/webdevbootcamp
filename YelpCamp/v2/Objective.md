## YelpCamp
* Add Landing page
* Add Campground page that list all campgrounds

#### Layout and Basic Styling
* Create header and footer partials
* Add in Bootstrap

#### Create new Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#### Style the campgrounds page
- Add a better header/title
- Make campgrounds display in a grid

#### Style Navbar and Form
- Add a navbar to all template
- Style the new campgrounds form

#### Show page
- Review the RESTful routes
- Add description to our campgrounds
- Show db.collection.drop()
- Add a show route/template

RESTful Routes
=============================================================================
name        url                 verb        description
=============================================================================
INDEX       /campgrounds        GET         Display a list of all campgrounds
NEW         /campgrounds/new    GET         Display form to add new campground
CREATE      /campgrounds        POST        Add new camp to database
SHOW        /campgrounds/:id    GET         Shows infor about one camp