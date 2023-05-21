import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostById } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { PostReactions } from './PostReactions'

export const SinglePostPage = () => {
    const {postId} = useParams()
    const post = useSelector((state) =>getPostById(state, postId))
    return (
        <section className='mt-4'>
            <article className="border rounded-md p-4">
                <h2 className="text-2xl">{post.title}</h2>
                <p className="text-gray-500">{post.content}</p>
                <div className="flex gap-2">
                    <PostAuthor userId={post.userId} />
                </div>
                <PostReactions post={post} />
            </article>
        </section>
    )
}
