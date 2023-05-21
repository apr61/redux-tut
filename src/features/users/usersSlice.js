import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: 'Luffy'},
    {id: 2, name: 'Zoro'},
    {id: 3, name: 'Sanji'},
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer