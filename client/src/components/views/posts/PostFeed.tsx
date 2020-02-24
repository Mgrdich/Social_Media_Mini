import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../action/postActions";
import {Avatar, Button, Card, CardContent, CardHeader} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const PostFeed:React.FC = () => {
    const dispatch = useDispatch();
    const post = useSelector<any>(state => state.post);

    useEffect(function () {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <>
            <div style={{marginTop:10}}>
                <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">
                            {'B'}
                        </Avatar>
                    }
                    title="Hello"
                    subheader="SSS"
                />
                <CardContent>
                    <p></p>
                </CardContent>
            </Card>
            </div>
        </>
    );
};

export default PostFeed;