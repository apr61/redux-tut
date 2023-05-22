import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectPostsByUserId } from "../posts/postsSlice";
import { getUserById } from "./usersSlice";

const UserPosts = () => {
  const { userId } = useParams();
  const usersPosts = useSelector((state) => selectPostsByUserId(state, userId));
  const user = useSelector((state) => getUserById(state, userId));
  const usersPostsList = usersPosts.map((post) => (
    <li key={post.id} className="text-lg">
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <section className="mt-4">
      <h2 className="text-xl text-center">{user.name + "'s "}Post List</h2>
      <ol className="pt-2">{usersPostsList}</ol>
    </section>
  );
};

export default UserPosts;
