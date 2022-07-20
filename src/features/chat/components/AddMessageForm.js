import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core";

import { addMessage, MESSAGE_KEY } from "../messagesSlice";
import { selectUser } from "../../login/loginSlice";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        button: {
            padding: "15px",
        },
    })
);

export function AddMessageForm() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [message, setMessage] = useState("");

    const handleMessageAdd = () => {
        if (user) {
            let messages = JSON.parse(localStorage.getItem(MESSAGE_KEY)) || [];
            localStorage.setItem(MESSAGE_KEY, JSON.stringify([...messages, {user, message}]));
            dispatch(addMessage({user, message}));
            setMessage("");
        }
    };

    return (
        <div className={classes.container}>
            <TextField
                autoFocus
                type="text"
                value={message}
                placeholder="Input message"
                label="Message"
                variant="outlined"
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={(e) => {
                    if (e.code === "Enter") {
                        handleMessageAdd();
                    }
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleMessageAdd}
                className={classes.button}
            >
                <SendIcon />
            </Button>
        </div>
    );
}
