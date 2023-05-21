import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice"
import { PostAuthor } from "./PostAuthor";
import { PostReactions } from "./PostReactions";


const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    let content;
    content = posts.map(post => (
        <article key={post.id} className="border rounded-md p-4">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-gray-500">{post.content}</p>
            <div className="flex gap-2">
                <PostAuthor userId={post.userId} />
            </div>
            <PostReactions post={post}/>
        </article>
    ))
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-2xl text-center text-slate-700">Posts</h2>
            {content}
        </section>
    )
}

export default PostsList