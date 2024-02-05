const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.commentController = async(req,res)=>{
    try{
        // fetch data from request body
        const {post,user,body} = req.body;

        // new method to perform insert operation

        const comment = new Comment({
            post,user,body
        });

        const savedComment = await comment.save();
        // accordingly i have to push that id into postModel comment array

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { comment: savedComment._id } },
            { new: true }
            // means returning updated post after modifications
        ).populate("comment") // populate the comment array with comment document otherwise comment id only will be added
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
