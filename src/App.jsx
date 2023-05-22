import { Route, Routes } from "react-router-dom";
import AddNewPostForm from "./features/posts/AddNewPostForm";
import PostsList from "./features/posts/PostsList";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Users from "./features/users/Users";
import UserPosts from "./features/users/UserPosts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="post">
            <Route index path="newpost" element={<AddNewPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
          <Route path="user">
            <Route index element={<Users />} />
            <Route path=':userId' element={<UserPosts />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
