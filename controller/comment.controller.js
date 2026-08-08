import Comment from "../model/comment.model.js";

export const createComment = async (req, res) => {
  try {
    const { content } = req.body;
    const { postId } = req.params;

    const newComment = await Comment.create({
        content,
        post: postId,
        author: req.user.id,
    });
    res.status(201).json({success: true, message: "comment posted",newComment});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

export const getCommentsByPost = async (req, res) =>{
    try {
        const { postId } = req.params;
        const comments = await Comment.find({post: postId }).populate("author", "name");
        res.status(200).json({ success: true, comments});
    } catch (error) {
        res.status(500). json({error: error.message});
    }
};

export const deleteComment = async (req, res) =>{
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment){
           return res.status(404).json({ success: false, message: "no comments found here"});
        }
        if (comment.author.toString() !== req.user.id){
            return res.status(403).json({ success: false, message: "You can not delete other user comments"});
        }
        await  Comment.findByIdAndDelete(req.params.commentId);
        res.status(200).json({ success: true, message: "Comment deleted successfully"});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};



