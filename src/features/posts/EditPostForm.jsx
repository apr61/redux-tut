import { useState } from "react";
import { selectPostById, updatePost } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { useNavigate, useParams } from "react-router-dom";

const EditPostForm = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const navigate = useNavigate();

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);
  const [userId, setUserId] = useState(post?.userId);
  const [addNewPostRequest, setAddNewPostRequest] = useState("idle");

  const canSave =
    [title, content, userId].every(Boolean) && addNewPostRequest === "idle";

  const authorNamesOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  function handleOnFormSubmit(e) {
    e.preventDefault();
    try {
      setAddNewPostRequest("pending");
      dispatch(
        updatePost({
          id: post.id,
          title,
          content,
          userId,
          reactions: post.reactions,
        })
      ).unwrap();
      setContent("");
      setTitle("");
      setUserId("");
      navigate(`/post/${postId}`);
    } catch (err) {
      console.error(err);
    } finally {
      setAddNewPostRequest("idle");
    }
  }

  return (
    <section className="my-4">
      <h2 className="my-2 text-2xl text-center">Edit Post</h2>
      <form className="flex flex-col gap-2" onSubmit={handleOnFormSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-xl">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            autoFocus={true}
            className="p-2 border rounded-md focus:outline focus:outline-slate-600 text-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="text-xl">
            Content
          </label>
          <textarea
            type="text"
            id="content"
            name="content"
            className="p-2 border rounded-md focus:outline focus:outline-slate-600 resize-none text-lg"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="content" className="text-xl">
            Author
          </label>
          <select
            className="p-2 bg-white border rounded-md text-lg"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value="">Select a author</option>
            {authorNamesOptions}
          </select>
        </div>
        <button
          className="bg-emerald-500 text-white p-2 rounded-md text-lg font-medium disabled:opacity-50"
          disabled={!canSave}
        >
          Edit post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
