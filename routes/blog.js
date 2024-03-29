const express= require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hey ya !");
})

// import controller
const {commentController} = require("../controllers/commentController");
const {postController,getPosts} = require("../controllers/postController");
const {likeController,unlikePost} = require("../controllers/likeController");
// const {} = require("../controllers/likeController");

// mapping controller
router.post("/comments/create",commentController);
router.post("/posts/create",postController);
router.get("/posts",getPosts);
router.post("/likes/create",likeController);
router.post("/likes/unlike",unlikePost);

// const {likeController} = require("../controllers/likeController");
// router.get("/dummyLink",likeController);
module.exports = router;