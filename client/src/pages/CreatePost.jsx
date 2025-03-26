import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/posts", {
        title,
        content,
        author,
        tags: tags.split(",").map((tag) => tag.trim()), 
      });
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Title:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Author Name:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Tags (comma separated):</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. React, Node, MongoDB"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Content:</label>
          <textarea
            className="w-full p-2 border rounded h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
