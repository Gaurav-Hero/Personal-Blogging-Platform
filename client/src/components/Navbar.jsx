import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-4 flex justify-between shadow-lg">
      <h1 className="text-2xl font-bold">Blogging Platform</h1>
      <div className="flex gap-6">
        <Link to="/" className="text-lg font-medium hover:underline">
          Home
        </Link>
        <Link to="/create" className="text-lg font-medium hover:underline">
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
