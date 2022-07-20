import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        doLogin: (state, action) => {
            state.username = action.payload;
        },
    },
});

export const { doLogin } = loginSlice.actions;

export const selectUser = (state) => state.login.username;

export default loginSlice.reducer;