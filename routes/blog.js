const express= require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hey ya !");
})

// import controller
// const {commentController} = require("../controllers/commentController");

// mapping controller
// router.post("/createTodo",commentController);

module.exports = router;