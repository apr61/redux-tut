import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createNewPost, getAllPosts } from "../../services/posts";

const initialState = {
    posts: [],
    error: null,
    status: 'idle' // 'idle' | 'loading' | 'succeeded' | 'failed'
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try{
        const response = await getAllPosts()
        return response
    }catch(err){
        return err.message
    }
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initalPost) => {
    try{
        const res = await createNewPost(initalPost)
        return res
    }catch(err){
        return err.message
    }
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reactionAdded: (state, action) => {
            const {postId, reaction} = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder){
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostStatus = (state) => state.posts.status
export const getPostError = (state) => state.posts.error
export const getPostById = (state, postId) => state.posts.posts.find(post => post.id === postId) 

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer