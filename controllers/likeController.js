const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likeController = async(req,res)=>{
    try{
        // fetch data from request body
        const {post,user} = req.body;

        // new method to perform insert operation

        const like = new Like({
            post,user
        });

        const savedLike = await like.save();
        // accordingly i have to push that id into postModel likes array

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
            // means returning updated post after modifications
        ).populate("likes") // populate the likes array with likes document otherwise likes id only will be added
        .exec();

        // const updatedPost = await Post.findByIdAndUpdate(post,${push})
        res.status(200).json({
            success:true,
            data:updatedPost,
            message:"Entry Created Successfully"
        })
    }
    catch{
        // console.error(err);
        // console.log(err);
        
        return res.status(500)
        .json({
            data:"Internal server error",
        });

    }

}
