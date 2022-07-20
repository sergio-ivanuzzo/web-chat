import { configureStore } from "@reduxjs/toolkit";

import messagesReducer from "../features/chat/messagesSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    message: messagesReducer,
    login: loginReducer,
  },
});
