import React from "react";
import { useEffect , useState } from "react";
import axios from 'axios';
import {Link } from 'react-router-dom';

const Home = () => {
  const [posts , setPosts] = useState([]);
  useEffect(() => {
    axios
    .get('http://localhost:5000/api/posts')
    .then((res) => setPosts(res.data))
    .catch((err) => console.log('Cant get Post : ',err))
  } , [])

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="border p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-gray-600">{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post._id}`} className="text-blue-600">Read More</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;