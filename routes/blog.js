const express= require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hey ya !");
})

// import controller

// mapping controller

module.exports = router;