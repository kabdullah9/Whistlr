const router = require("express").Router();
const post = require("./post");

// Book routes
router.use("/post", post);

module.exports = router;
