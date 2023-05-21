import { useDispatch, useSelector } from "react-redux"
import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from "./postsSlice"
import { useEffect } from "react";
import SinglePost  from "./SinglePost";


const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostStatus)
    const error = useSelector(getPostError)

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postsStatus])

    let content;
    if (postsStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (postsStatus === 'succeeded') {
        content = posts.map(post => (
            <SinglePost key={post.id} post={post} />
        ))
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-2xl text-center text-slate-700">Posts</h2>
            {content}
        </section>
    )
}

export default PostsList