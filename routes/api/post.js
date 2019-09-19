var post = require("../../controllers/post-controller");

router.route("/")
    .post(post.create);