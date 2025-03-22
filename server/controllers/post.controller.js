import Post from '../models/post.model.js'

export const createPost = async(req,res) => {
    try {
        const {title, content, author, tags} = req.body;
        if(!title || !content || !author){
            res.status(400).json({message:"All field are required!"})
        }

        const newPost = new Post({title, content, author, tags});
        await newPost.save();

        res.status(201).json({ message: "Post created successfully", post: newPost });

    } catch (error) {
        console.log("Problen at : createPost controller")
        res.status(500).json({ message: "Server error", error: error.message })

    }
};

export const getAllPosts = async(req,res) => {
    try {
        const posts = await Post.find().sort({createdAt: -1})
        res.status(200).json(posts)
    } catch (error) {
        console.log("Problen at : getAllPost controller")
        res.status(500).json({ message: "Server error", error: error.message })
    }
};

export const getPostById = async(req,res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
    
        res.status(200).json(post);
      } catch (error) {
        console.log("Problen at : getPostByID controller")
        res.status(500).json({ message: "Server error", error: error.message });
      }
};

export const updatePost = async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return updated document
        runValidators: true, // Ensure validation rules are applied
      });
  
      if (!updatedPost) return res.status(404).json({ message: "Post not found" });
  
      res.status(200).json({ message: "Post updated successfully", post: updatedPost });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      if (!deletedPost) return res.status(404).json({ message: "Post not found" });
  
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
};
