import React from "react";
import { useSelector } from "react-redux";

import { Chat } from "./features/chat/components/Chat";
import { LoginForm } from "./features/login/components/LoginForm";
import { selectUser } from "./features/login/loginSlice";

function App() {
    const user = useSelector(selectUser);
    return (
        <div className="App">
            {!user && (<LoginForm />)}
            {user && (<Chat />)}
        </div>
    );
}

export default App;
