import Post from "../model/post.model.js";

//CRUD
// create post
export const createPost = async (req, res) => {
  try {
    const { title, content, image, category } = req.body;

    const newPost = await Post.create({
      title,
      content,
      image,
      category,
      author: req.user.id, //key ka naam (author) aur value ka source (req.user.id) alag hain.ye auth.middleware.js se aayega, jab route pe protect middleware lagega.
    });
    res
      .status(201)
      .json({ success: true, message: "post created successfully", newPost });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//all post
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email");
    res.status(200).json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//find by id, individula
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "author",
      "name, email",
    );
    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "No post available" });
    }
    res.status(200).json({ success: true, post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update Post
export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPost) {
      res
        .status(404)
        .json({
          success: false,
          message: "there is no post available to update",
        });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Post Updated Successfullly",
        updatedPost,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete post
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      res.status(404).json({ success: false, message: "No post to delete" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Post deleted successfully",
        deletedPost,
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
