import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title:'Post 1', content:'Post 1 content'},
    {id: 2, title:'Post 2', content:'Post 2 content'},
    {id: 3, title:'Post 3', content:'Post 3 content'},
]

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{

    }
})

export const selectAllPosts = (state) => state.posts

export default postsSlice.reducer