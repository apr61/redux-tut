import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { PostReactions } from "./PostReactions";
import { selectPostById } from "./postsSlice";

const SinglePost = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <article className="border rounded-md p-4">
      <h2 className="text-2xl">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-500">{post.content}</p>
      <div className="flex gap-2">
        <PostAuthor userId={post.userId} />
      </div>
      <PostReactions post={post} />
    </article>
  );
};

export default SinglePost;
