import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCount, increaseCount } from "../features/posts/postsSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bg-lime-600 text-white p-4 flex gap-4 items-center">
      <Link to="/" className="text-2xl">
        Blog Project
      </Link>
      <Link to="/post/newpost" className="text-lg ml-auto">
        New Post
      </Link>
      <Link to="/user" className="text-lg">
        Users
      </Link>
      <button onClick={() => dispatch(increaseCount())}>
        {useSelector(getCount)}
      </button>
    </nav>
  );
};

export default Header;
