import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams();
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

      {/* Edit button */}
      <Link
        to={`/edit/${post._id}`}
        className="mt-4 inline-block bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
      >
        Edit Post
      </Link>
    </div>
  );
};

export default SinglePost;
