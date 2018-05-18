const router = require("express").Router();
const post = require("./post");
const authenticationController = require("../../controllers/authenticationController")
const exjwt = require('express-jwt');
const config = require('./../../config');

const isAuthenticated = exjwt({
    secret: config.tokenSecret
});
// Book routes
router.use("/post", post);

router.route("/login")
    .post(authenticationController.findOne);


router.route("/signup")
    .post(authenticationController.create);

router.route("/user/:id")
    .get(isAuthenticated, authenticationController.findId);
    
module.exports = router;
