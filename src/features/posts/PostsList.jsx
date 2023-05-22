import { useSelector } from "react-redux";
import { getPostStatus, getPostError, selectPostIds } from "./postsSlice";
import SinglePost from "./SinglePost";

const PostsList = () => {
  const postIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    content = postIds.map((postId) => (
      <SinglePost key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl text-center text-slate-700">Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
