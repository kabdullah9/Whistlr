const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
// Init the express-jwt middleware
const isAuthenticated = exjwt({
    secret: 'all sorts of code up in here'
});

// API Routes
router.use("/api", apiRoutes);

router.route("/", isAuthenticated /* Using the express jwt MW here */, (req, res) => {
    res.send('You are authenticated'); //Sending some response when authenticated
  });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;