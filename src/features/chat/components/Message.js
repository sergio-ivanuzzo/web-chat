import React from "react";
import { useSelector } from "react-redux";
import { Avatar, createStyles, makeStyles } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

import { selectUser } from "../../login/loginSlice";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: "flex",
            margin: 10,
            alignItems: "center",
        },
        messagesBody: {
            width: "calc( 100% - 20px )",
            margin: 10,
            height: "calc( 100% - 80px )",
            padding: 10,
            "& > div": {
                padding: 10
            }
        },
        avatarContainer: {
            display: "flex",
            flexDirection: "column",
        },
        purple: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
        },
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
        },
        floatLeft: {
            flexDirection: "row-reverse",
        },
        username: {
            fontWeight: "bold",
        }
    })
);

export function Message({ user, message }) {
    const classes = useStyles();
    const selectedUser = useSelector(selectUser);
    const isMe = selectedUser === user;

    return (
        <div>
            <div className={`${classes.container} ${isMe ? classes.floatLeft : ""}`}>
                <div className={classes.avatarContainer}>
                    <Avatar className={isMe ? classes.orange : classes.purple}>A</Avatar>
                    <span className={classes.username}>{user}</span>
                </div>
                <div className={classes.messagesBody}>
                    <div className={`${isMe ? classes.orange : classes.purple}`}>
                        {message}
                    </div>
                </div>
            </div>
        </div>
    );
}
