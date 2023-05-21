import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const REACTIONS_EMOJIS = {
    like: '👍',
    heart: '❤',
    wow: '😮'
}

export const PostReactions = ({ post }) => {
    const dispatch = useDispatch()
   
    const reactionButtons = Object.entries(REACTIONS_EMOJIS).map(([name, emoji]) => (
        <button
            className='flex gap-2 items-center'
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
        >{emoji} {post.reactions[name]}</button>
    ))
    return (
        <div className='flex gap-2 mt-2'>
            {reactionButtons}
        </div>
    )
}
