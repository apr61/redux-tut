import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, selectPostById } from "./postsSlice";
import { PostAuthor } from "./PostAuthor";
import { PostReactions } from "./PostReactions";

const SinglePostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector((state) => selectPostById(state, postId));
  function handleDeletePost() {
    try {
      dispatch(deletePost(postId)).unwrap();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <section className="mt-4">
      <article className="border rounded-md p-4">
        <h2 className="text-2xl">{post.title}</h2>
        <p className="text-gray-500">{post.content}</p>
        <div className="flex gap-2">
          <PostAuthor userId={post.userId} />
        </div>
        <PostReactions post={post} />
      </article>
      <div className="flex gap-4 items-center justify-center mt-2">
        <button
          className="px-4 py-1 border text-lg rounded-md hover:bg-emerald-400 hover:text-white"
          onClick={() => {
            navigate(`/post/edit/${postId}`);
          }}
        >
          Edit
        </button>
        <button
          className="px-4 py-1 border text-lg rounded-md hover:bg-red-400 hover:text-white"
          onClick={() => handleDeletePost()}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default SinglePostPage;
