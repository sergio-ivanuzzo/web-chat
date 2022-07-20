import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {createStyles, makeStyles, Paper} from "@material-ui/core";

import { selectMessages, syncMessages } from "../messagesSlice";
import { Message } from "./Message";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_SIZE = 25;
const INITIAL_PAGE = 1;

const useStyles = makeStyles((theme) =>
    createStyles({
        messagesBody: {
            width: "calc( 100% - 20px )",
            margin: 10,
            height: "calc( 100% - 80px )"
        }
    })
);

export function MessageList() {
    const [page, setPage] = useState(INITIAL_PAGE);
    const classes = useStyles();
    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleDispatch = () => dispatch(syncMessages());

        window.addEventListener("storage", handleDispatch);

        return () => {
            window.removeEventListener("storage", handleDispatch);
        }
    }, []);

    const fetchMore = () => setPage(page + 1);

    const currentMessages = [...messages].reverse().slice(0, PAGE_SIZE * page);

    return (
        <Paper className={classes.messagesBody}>
            <div
                id="scrollableDiv"
                style={{
                    height: 500,
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column-reverse",
                }}
            >
                <InfiniteScroll
                    dataLength={currentMessages.length}
                    next={fetchMore}
                    style={{ display: "flex", flexDirection: "column-reverse" }}
                    inverse={true}
                    hasMore={currentMessages.length < messages.length}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    {currentMessages.map((message, index) => <Message key={index} {...message} />)}
                </InfiniteScroll>
            </div>
        </Paper>
    );
}
