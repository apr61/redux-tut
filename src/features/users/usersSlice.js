import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../services/users";

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try{
        const response = await getAllUsers()
        return response
    }catch(err){
        return err.message
    }
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer