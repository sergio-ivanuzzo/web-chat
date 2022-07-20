import React from "react";
import { createStyles, makeStyles, Paper } from "@material-ui/core";

import { AddMessageForm } from "./AddMessageForm";
import { MessageList } from "./MessageList";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            width: "80vw",
            height: "80vh",
            maxWidth: "500px",
            maxHeight: "700px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative"
        },
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        messagesBody: {
            width: "calc( 100% - 20px )",
            margin: 10,
            overflowY: "scroll",
            height: "calc( 100% - 80px )"
        }
    })
);

export function Chat() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Paper className={classes.paper} zDepth={2}>
                <MessageList />
                <AddMessageForm />
            </Paper>
        </div>
    );
}
