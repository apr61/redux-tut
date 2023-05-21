import { Route, Routes } from "react-router-dom"
import { AddNewPostForm } from "./features/posts/AddNewPostForm"
import PostsList from "./features/posts/PostsList"
import { Layout } from "./components/Layout"
import { SinglePostPage } from "./features/posts/SinglePostPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsList />} />
          <Route path="newpost" element={<AddNewPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
