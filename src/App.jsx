import { AddNewPostForm } from "./features/posts/AddNewPostForm"
import PostsList from "./features/posts/PostsList"

function App() {

  return (
    <>
      <main className="max-w-[40rem] mx-auto mt-10">
        <AddNewPostForm />
        <PostsList />
      </main>
    </>
  )
}

export default App