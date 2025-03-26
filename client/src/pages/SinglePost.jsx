import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        navigate("/"); 
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  if (!post) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">By {post.author}</p>
      <div className="mt-2">
        <span className="font-semibold">Tags:</span>
        {post.tags.map((tag, index) => (
          <span key={index} className="ml-2 px-2 py-1 bg-gray-200 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4">{post.content}</p>

      
      <div className="mt-4 flex space-x-4">
        <Link
          to={`/edit/${post._id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SinglePost;

