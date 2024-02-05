const Post = require("../models/postModel");

exports.postController = async(req,res)=>{
    try{
        // fetch data from request body
        const {title,body,user} = req.body;

        // new method to perform insert operation
        const post = new Post({
            title,body,user
        });

        const savedpost = await post.save();

        // const updatedPost = await Post.findByIdAndUpdate(post,${push})
        res.status(200).json({
            success:true,
            data:savedpost,
            message:"Entry Created Successfully"
        })
    }
    catch(err){
        // console.error(err);
        // console.log(err);
        
        return res.status(500)
        .json({
            data:"Internal server error",
            message:err.message
        });
    }
}

exports.getPosts = async(req,res)=>{
    try{
        const posts = await Post.find().populate("comment").exec();
        // also testing for likes after adding like controller
        res.status(200)
        .json({
            success:true,
            data:posts,
            message:"Entire Posts Data is fetched",
        })
    }
    catch{
        return res.status(500)
        .json({
            success:false,
            error:"Internal server error",
        })
    }
}
