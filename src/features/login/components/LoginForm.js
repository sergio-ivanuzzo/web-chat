import React, {useState} from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core";

import { doLogin } from "../loginSlice";

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

export function LoginForm() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");

    const handleLogin = () => {
        dispatch(doLogin(username));
    };

    return (
        <div className={classes.container}>
            <div>
                <TextField
                    autoFocus
                    value={username}
                    placeholder="Input username before chat"
                    label="Username"
                    variant="outlined"
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyUp={(e) => {
                        if (e.code === "Enter") {
                            handleLogin();
                        }
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    className={classes.button}
                >
                    <SendIcon />
                </Button>
            </div>
        </div>
    );
}
