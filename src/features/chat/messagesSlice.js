import { createSlice } from "@reduxjs/toolkit";

export const MESSAGE_KEY = "messages";

const initialState = {
    messages: JSON.parse(localStorage.getItem(MESSAGE_KEY)) || [],
}

export const messagesSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        syncMessages: (state) => {
            state.messages = JSON.parse(localStorage.getItem(MESSAGE_KEY)) || [];
        }
    },
});

export const { addMessage, syncMessages } = messagesSlice.actions;

export const selectMessages = (state) => state.message.messages;

export default messagesSlice.reducer;