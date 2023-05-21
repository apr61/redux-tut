import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'Post 1', content: 'Post 1 content', reactions: { like: 0, wow: 0, heart: 0 } },
    { id: 3, title: 'Post 3', content: 'Post 3 content', reactions: { like: 0, wow: 0, heart: 0 } },
    { id: 2, title: 'Post 2', content: 'Post 2 content', reactions: { like: 0, wow: 0, heart: 0 } },
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content, userId) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        reactions: { like: 0, wow: 0, heart: 0 }
                    }
                }
            }
        },
        reactionAdded: (state, action) => {
            const {postId, reaction} = action.payload
            const existingPost = state.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer