const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/post"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);

router.route("/:id")
    .delete(postController.remove);
    
module.exports = router;