const router = require("express").Router();
const post = require("./post");
const authenticationController = require("../../controllers/authenticationController")

// Book routes
router.use("/post", post);

router.route("/login")
    .post(authenticationController.findOne);


router.route("/signup")
    .post(authenticationController.create);

router.route("/user/:id")
    .get(authenticationController.findId);
    
module.exports = router;
